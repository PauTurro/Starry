// ===========================
// File: src/hooks/useFirebase.js
// ===========================
import { useEffect, useState, useCallback, useRef } from "react"; // Import useRef
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
  const [buttonNames, setButtonNames] = useState({}); // State for button names
  const [isButtonDataLoaded, setIsButtonDataLoaded] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const [error, setError] = useState(null);
  const errorTimeoutRef = useRef(null); // Ref to store timeout ID

  // Clears the error and any pending timeout
  const clearError = useCallback(() => {
    if (errorTimeoutRef.current) {
      clearTimeout(errorTimeoutRef.current);
      errorTimeoutRef.current = null;
    }
    setError(null);
  }, []);

  // Sets an error message and clears it after a delay
  const showError = useCallback((message) => {
    if (errorTimeoutRef.current) {
      clearTimeout(errorTimeoutRef.current); // Clear previous timeout
    }
    setError(message); // Set the new error message
    if (message) { // Only set timeout if there's an actual message
      errorTimeoutRef.current = setTimeout(() => {
        setError(null); // Clear the error after delay
        errorTimeoutRef.current = null;
      }, 4000); // 4 seconds delay
    }
  }, []);

  const register = async (email, password) => {
    clearError(); // Use clearError instead of setError(null)
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        showError("Email already registered"); // Use showError
      } else if (err.code === "auth/weak-password") {
        showError("6 characters or more"); // Use showError
      } else if (err.code === "auth/invalid-email") {
        showError("Invalid email"); // Use showError
      } else {
        showError("Registration failed. Please try again."); // Use showError
      }
    }
  };

  const login = async (email, password) => {
    clearError(); // Use clearError instead of setError(null)
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
        showError("Wrong email or password"); // Use showError
      } else {
        showError("Wrong email or password"); // Use showError
      }
    }
  };

  const logout = async () => {
    clearError(); // Use clearError
    await signOut(auth);
  };

  // Toggle a button's open/closed state if user is authorized
  const toggleButton = async (token) => {
    const path = `tokens/${token}/buttonStatus`;
    const snap = await get(ref(db, path));
    const current = snap.exists() ? snap.val() : "closed";
    const next = current === "open" ? "closed" : "open";
    await set(ref(db, path), next);
  };

  // Update the name of a button
  const updateButtonName = async (token, newName) => {
    if (!user || !tokens.includes(token)) return; // Basic auth check
    const path = `tokens/${token}/buttonName`;
    try {
      await set(ref(db, path), newName || null); // Set to null if empty to remove
    } catch (err) {
      console.error("Error updating button name:", err);
      showError("Failed to update name.");
    }
  };

  // Share a device token with another user (by UID)
  const shareToken = async (token, targetUid) => {
    // grant authorization in token metadata
    await set(ref(db, `tokens/${token}/authorizedUsers/${targetUid}`), true);
    // add token to target user's list without overwriting existing tokens
    const userTokensRef = ref(db, `users/${targetUid}/deviceTokens`);
    const snap = await get(userTokensRef);
    const existing = snap.exists() && Array.isArray(snap.val()) ? snap.val() : [];
    if (!existing.includes(token)) {
      await set(userTokensRef, [...existing, token]);
    }
  };

  // Revoke a previously shared token
  const revokeShare = async (token, targetUid) => {
    await set(ref(db, `tokens/${token}/authorizedUsers/${targetUid}`), null);
    const userTokensRef = ref(db, `users/${targetUid}/deviceTokens`);
    const snap = await get(userTokensRef);
    const existing = snap.exists() && Array.isArray(snap.val()) ? snap.val() : [];
    if (existing.includes(token)) {
      await set(userTokensRef, existing.filter((t) => t !== token));
    }
  };

  // Ensure the current user's list of tokens (owned + shared)
  const ensureToken = useCallback(async (uid) => {
    const userTokensRef = ref(db, `users/${uid}/deviceTokens`);
    const snap = await get(userTokensRef);
    let userTokens = [];

    if (snap.exists() && Array.isArray(snap.val())) {
      // existing owned or shared tokens
      userTokens = snap.val();
    } else {
      // new user: generate owned tokens
      const newTokens = Array.from({ length: NUM_TOKENS }, generateToken);
      userTokens = newTokens;
      const updates = { [`/users/${uid}/deviceTokens`]: userTokens };
      newTokens.forEach((tok) => {
        updates[`/tokens/${tok}`] = {
          owner: uid,
          authorizedUsers: { [uid]: true },
          buttonStatus: "closed",
        };
      });
      await update(ref(db), updates);
    }

    setTokens(userTokens);
    setIsButtonDataLoaded(false);
    listenToAllButtonStates(userTokens);
  }, []);

  // Listen to buttonStatus and buttonName for each token in the list
  const listenToAllButtonStates = (tokenList) => {
    const loadedStates = {};
    const loadedNames = {};
    setButtonState({});
    setButtonNames({}); // Reset names state
    setIsButtonDataLoaded(false);

    if (tokenList.length === 0) {
      setIsButtonDataLoaded(true);
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
      // Listener for buttonStatus
      const statusRef = ref(db, `tokens/${tok}/buttonStatus`);
      onValue(
        statusRef,
        (snap) => {
          let state = snap.val();
          if (typeof state !== "string") {
            state = "closed";
            // Optionally set default state in DB if needed: set(statusRef, state);
          }
          setButtonState((prev) => ({ ...prev, [tok]: state }));
          loadedStates[tok] = true;
          checkAllLoaded();
        },
        (err) => {
          console.error(`Error listening to status for ${tok}:`, err);
          loadedStates[tok] = true; // Mark as loaded even on error to avoid blocking
          checkAllLoaded();
        }
      );

      // Listener for buttonName
      const nameRef = ref(db, `tokens/${tok}/buttonName`);
      onValue(
        nameRef,
        (snap) => {
          const name = snap.val() || null; // Store null if no name exists
          setButtonNames((prev) => ({ ...prev, [tok]: name }));
          loadedNames[tok] = true;
          checkAllLoaded();
        },
        (err) => {
          console.error(`Error listening to name for ${tok}:`, err);
          loadedNames[tok] = true; // Mark as loaded even on error
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
        setButtonNames({}); // Clear names on logout
        setIsButtonDataLoaded(false);
        clearError(); // Use clearError
      }
      setAuthChecked(true);
    });
    return unsub;
  }, [ensureToken, clearError]); // Added clearError dependency

  // Effect to clear timeout on unmount
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
    buttonNames, // Return button names
    isButtonDataLoaded,
    authChecked,
    error,
    register,
    login,
    logout,
    toggleButton,
    updateButtonName, // Return update function
    shareToken,
    revokeShare,
    clearError,
  };
}
