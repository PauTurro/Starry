// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { FIREBASE_CONFIG } from "./constants";

console.log("Initializing Firebase with config:", {
  projectId: FIREBASE_CONFIG.projectId,
  authDomain: FIREBASE_CONFIG.authDomain,
  apiKey: FIREBASE_CONFIG.apiKey ? "***" + FIREBASE_CONFIG.apiKey.slice(-4) : "missing"
});

const app = initializeApp(FIREBASE_CONFIG);
export const auth = getAuth(app);
export const db = getDatabase(app);

console.log("Firebase initialized successfully");
