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
import { APP_CONFIG, UI, TOKEN_CHARS } from "../constants";

const generateToken = () =>
  Array.from({ length: 8 }, () =>
    TOKEN_CHARS.charAt(Math.floor(Math.random() * TOKEN_CHARS.length))
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
      }, APP_CONFIG.ERROR_TIMEOUT);
    }
  }, []);

  const register = async (email, password) => {
    clearError();
    
    // Input validation
    if (!email || !password) {
      showError("Please enter both email and password.");
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError("Please enter a valid email address.");
      return;
    }
    
    // Password validation
    if (password.length < 6) {
      showError("Password must be at least 6 characters long.");
      return;
    }
    
    // Trim whitespace from inputs
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    
    if (!trimmedEmail || !trimmedPassword) {
      showError("Please enter both email and password.");
      return;
    }
    
    try {
      console.log("Attempting registration with:", { email: trimmedEmail, passwordLength: trimmedPassword.length });
      const userCredential = await createUserWithEmailAndPassword(auth, trimmedEmail, trimmedPassword);
      if (userCredential.user) {
        console.log("User registered successfully:", userCredential.user.uid);
      }
    } catch (err) {
      console.error("Registration error details:", {
        code: err.code,
        message: err.message,
        email: trimmedEmail
      });
      
      if (err.code === "auth/email-already-in-use") {
        showError("This email is already registered. Please try logging in instead.");
      } else if (err.code === "auth/weak-password") {
        showError("Password is too weak. Please use at least 6 characters.");
      } else if (err.code === "auth/invalid-email") {
        showError("Please enter a valid email address.");
      } else if (err.code === "auth/operation-not-allowed") {
        showError("Email/password accounts are not enabled. Please contact support.");
      } else if (err.code === "auth/too-many-requests") {
        showError("Too many failed attempts. Please try again later.");
      } else {
        showError("Registration failed. Please check your details and try again.");
      }
    }
  };

  const login = async (email, password) => {
    clearError();
    
    // Input validation
    if (!email || !password) {
      showError("Please enter both email and password.");
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError("Please enter a valid email address.");
      return;
    }
    
    // Trim whitespace from inputs
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    
    if (!trimmedEmail || !trimmedPassword) {
      showError("Please enter both email and password.");
      return;
    }
    
    try {
      console.log("Attempting login with:", { email: trimmedEmail, passwordLength: trimmedPassword.length });
      await signInWithEmailAndPassword(auth, trimmedEmail, trimmedPassword);
      console.log("Login successful");
    } catch (err) {
      console.error("Login error details:", {
        code: err.code,
        message: err.message,
        email: trimmedEmail
      });
      
      if (err.code === "auth/user-not-found") {
        showError("User not found. Please check your email or register first.");
      } else if (err.code === "auth/wrong-password") {
        showError("Incorrect password. Please try again.");
      } else if (err.code === "auth/invalid-email") {
        showError("Invalid email format.");
      } else if (err.code === "auth/invalid-credential") {
        showError("Invalid credentials. Please check your email and password, or register first.");
      } else if (err.code === "auth/too-many-requests") {
        showError("Too many failed attempts. Please try again later.");
      } else if (err.code === "auth/user-disabled") {
        showError("This account has been disabled. Please contact support.");
      } else if (err.code === "auth/operation-not-allowed") {
        showError("Email/password login is not enabled. Please contact support.");
      } else {
        showError(`Login failed: ${err.message}`);
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
    const current = snap.exists() ? snap.val() : UI.BUTTON_STATES.CLOSED;
    const next = current === UI.BUTTON_STATES.OPEN ? UI.BUTTON_STATES.CLOSED : UI.BUTTON_STATES.OPEN;
    await set(ref(db, path), next);
  };

  const updateButtonName = async (token, newName) => {
    if (!user || !tokens.includes(token)) return;
    const path = `tokens/${token}/buttonName`;
    try {
      await set(ref(db, path), newName || null);
    } catch (err) {
      console.error("Error updating button name:", err);
      showError(UI.ERROR_MESSAGES.UPDATE_NAME_FAILED);
    }
  };

  const ensureToken = useCallback(async (uid) => {
    const userTokensRef = ref(db, `users/${uid}/deviceTokens`);
    const snap = await get(userTokensRef);
    let userTokens = [];

    if (snap.exists() && Array.isArray(snap.val())) {
      userTokens = snap.val();
    } else {
      const newTokens = Array.from({ length: APP_CONFIG.NUM_TOKENS }, generateToken);
      userTokens = newTokens;
      const updates = { [`/users/${uid}/deviceTokens`]: userTokens };
      newTokens.forEach((tok) => {
        updates[`/tokens/${tok}`] = {
          owner: uid,
          authorizedUsers: { [uid]: true },
          buttonStatus: UI.BUTTON_STATES.HELLO,
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
      const statesLoaded = Object.keys(loadedStates).length === tokenList.length;
      const namesLoaded = Object.keys(loadedNames).length === tokenList.length;
      
      if (statesLoaded && namesLoaded) {
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
            state = UI.BUTTON_STATES.CLOSED;
          }
          setButtonState((prev) => ({ ...prev, [tok]: state }));
          loadedStates[tok] = true;
          checkAllLoaded();
        },
        (error) => {
          console.error("Error listening to button status:", error);
          loadedStates[tok] = true;
          checkAllLoaded();
        }
      );

      const nameRef = ref(db, `tokens/${tok}/buttonName`);
      onValue(
        nameRef,
        (snap) => {
          const name = snap.val();
          setButtonNames((prev) => ({ ...prev, [tok]: name }));
          loadedNames[tok] = true;
          checkAllLoaded();
        },
        (error) => {
          console.error("Error listening to button name:", error);
          loadedNames[tok] = true;
          checkAllLoaded();
        }
      );
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setAuthChecked(true);
      if (user) {
        ensureToken(user.uid);
      } else {
        setTokens([]);
        setButtonState({});
        setButtonNames({});
        setIsButtonDataLoaded(false);
      }
    });

    return () => unsubscribe();
  }, [ensureToken]);

  return {
    user,
    token: tokens[0] || null,
    tokens,
    buttonState,
    isButtonDataLoaded,
    buttonNames,
    updateButtonName,
    error,
    register,
    login,
    logout,
    toggleButton,
    clearError,
    showError,
    authChecked,
  };
}
