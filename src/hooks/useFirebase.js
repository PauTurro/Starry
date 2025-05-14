// ===========================
// File: src/hooks/useFirebase.js
// ===========================
import { useEffect, useState, useCallback, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  ref,
  set,
  get,
  onValue,
  update,
} from "firebase/database";
import { auth, db } from "../firebaseConfig";

const NUM_TOKENS = 15;
const generateToken = () =>
  Array.from({ length: 8 }, () =>
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(
      Math.floor(Math.random() * 62)
    )
  ).join("");

export function useFirebase() {
  const [user, setUser] = useState(null);
  const [tokens, setTokens] = useState([]);
  const [buttonState, setButtonState] = useState({});
  const [buttonNames, setButtonNames] = useState({});
  const [isButtonDataLoaded, setIsButtonDataLoaded] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const [error, setError] = useState(null);
  const errorTimeoutRef = useRef(null);

  const clearError = useCallback(() => {
    if (errorTimeoutRef.current) {
      clearTimeout(errorTimeoutRef.current);
      errorTimeoutRef.current = null;
    }
    setError(null);
  }, []);

  const showError = useCallback((message) => {
    if (errorTimeoutRef.current) {
      clearTimeout(errorTimeoutRef.current);
    }
    setError(message);
    if (message) {
      errorTimeoutRef.current = setTimeout(() => {
        setError(null);
        errorTimeoutRef.current = null;
      }, 4000);
    }
  }, []);

  const register = async (email, password) => {
    clearError();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      if (userCredential.user) {
        // Tokens will already have "hello" status because of the improved ensureToken()
        console.log("User registered and initial tokens set.");
      }
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        showError("Email already registered");
      } else if (err.code === "auth/weak-password") {
        showError("6 characters or more");
      } else if (err.code === "auth/invalid-email") {
        showError("Invalid email");
      } else {
        showError("Registration failed. Please try again.");
      }
    }
  };

  const login = async (email, password) => {
    clearError();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      const codes = [
        "auth/user-not-found",
        "auth/invalid-credential",
        "auth/wrong-password",
        "auth/invalid-email",
      ];
      if (codes.includes(err.code)) {
        showError("Wrong email or password");
      } else {
        showError("Wrong email or password");
      }
    }
  };

  const logout = async () => {
    clearError();
    await signOut(auth);
  };

  const toggleButton = async (token) => {
    const path = `tokens/${token}/buttonStatus`;
    const snap = await get(ref(db, path));
    const current = snap.exists() ? snap.val() : "closed";
    const next = current === "open" ? "closed" : "open";
    await set(ref(db, path), next);
  };

  const updateButtonName = async (token, newName) => {
    if (!user || !tokens.includes(token)) return;
    const path = `tokens/${token}/buttonName`;
    try {
      await set(ref(db, path), newName || null);
    } catch (err) {
      console.error("Error updating button name:", err);
      showError("Failed to update name.");
    }
  };

  const shareToken = async (token, targetUid) => {
    await set(ref(db, `tokens/${token}/authorizedUsers/${targetUid}`), true);
    const userTokensRef = ref(db, `users/${targetUid}/deviceTokens`);
    const snap = await get(userTokensRef);
    const existing = snap.exists() && Array.isArray(snap.val()) ? snap.val() : [];
    if (!existing.includes(token)) {
      await set(userTokensRef, [...existing, token]);
    }
  };

  const revokeShare = async (token, targetUid) => {
    await set(ref(db, `tokens/${token}/authorizedUsers/${targetUid}`), null);
    const userTokensRef = ref(db, `users/${targetUid}/deviceTokens`);
    const snap = await get(userTokensRef);
    const existing = snap.exists() && Array.isArray(snap.val()) ? snap.val() : [];
    if (existing.includes(token)) {
      await set(userTokensRef, existing.filter((t) => t !== token));
    }
  };

  const ensureToken = useCallback(async (uid) => {
    const userTokensRef = ref(db, `users/${uid}/deviceTokens`);
    const snap = await get(userTokensRef);
    let userTokens = [];

    if (snap.exists() && Array.isArray(snap.val())) {
      userTokens = snap.val();
    } else {
      const newTokens = Array.from({ length: NUM_TOKENS }, generateToken);
      userTokens = newTokens;
      const updates = { [`/users/${uid}/deviceTokens`]: userTokens };
      newTokens.forEach((tok) => {
        updates[`/tokens/${tok}`] = {
          owner: uid,
          authorizedUsers: { [uid]: true },
          buttonStatus: "hello", // <<=== now directly set to "hello" on creation!
        };
      });
      await update(ref(db), updates);
    }

    setTokens(userTokens);
    setIsButtonDataLoaded(false);
    listenToAllButtonStates(userTokens);
  }, []);

  const listenToAllButtonStates = (tokenList) => {
    const loadedStates = {};
    const loadedNames = {};
    setButtonState({});
    setButtonNames({});
    setIsButtonDataLoaded(false);

    if (tokenList.length === 0) {
      setIsButtonDataLoaded(true);
      return;
    }

    const checkAllLoaded = () => {
      if (
        Object.keys(loadedStates).length === tokenList.length &&
        Object.keys(loadedNames).length === tokenList.length
      ) {
        setIsButtonDataLoaded(true);
      }
    };

    tokenList.forEach((tok) => {
      const statusRef = ref(db, `tokens/${tok}/buttonStatus`);
      onValue(
        statusRef,
        (snap) => {
          let state = snap.val();
          if (typeof state !== "string") {
            state = "closed";
          }
          setButtonState((prev) => ({ ...prev, [tok]: state }));
          loadedStates[tok] = true;
          checkAllLoaded();
        },
        (err) => {
          console.error(`Error listening to status for ${tok}:`, err);
          loadedStates[tok] = true;
          checkAllLoaded();
        }
      );

      const nameRef = ref(db, `tokens/${tok}/buttonName`);
      onValue(
        nameRef,
        (snap) => {
          const name = snap.val() || null;
          setButtonNames((prev) => ({ ...prev, [tok]: name }));
          loadedNames[tok] = true;
          checkAllLoaded();
        },
        (err) => {
          console.error(`Error listening to name for ${tok}:`, err);
          loadedNames[tok] = true;
          checkAllLoaded();
        }
      );
    });
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (u) ensureToken(u.uid);
      else {
        setTokens([]);
        setButtonState({});
        setButtonNames({});
        setIsButtonDataLoaded(false);
        clearError();
      }
      setAuthChecked(true);
    });
    return unsub;
  }, [ensureToken, clearError]);

  useEffect(() => {
    return () => {
      if (errorTimeoutRef.current) {
        clearTimeout(errorTimeoutRef.current);
      }
    };
  }, []);

  return {
    user,
    tokens,
    buttonState,
    buttonNames,
    isButtonDataLoaded,
    authChecked,
    error,
    register,
    login,
    logout,
    toggleButton,
    updateButtonName,
    shareToken,
    revokeShare,
    clearError,
  };
}
