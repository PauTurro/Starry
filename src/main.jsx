// src/main.jsx

// 🚨 ADD THIS FIRST: iOS PWA keyboard fix
if (window.navigator.standalone === true) {
  document.documentElement.classList.add('ios-standalone');
}

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // <--- This is critical
import ErrorBoundary from "./components/ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// 💥 Service Worker registration with update detection
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const swPath = `${import.meta.env.BASE_URL}service-worker.js`;
    navigator.serviceWorker.register(swPath)
      .then(registration => {
        console.log('✅ Service Worker registered with scope:', registration.scope);

        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          if (installingWorker) {
            installingWorker.onstatechange = () => {
              if (installingWorker.state === 'installed') {
                if (navigator.serviceWorker.controller) {
                  if (confirm('🚀 New version available! Reload now?')) {
                    window.location.reload();
                  }
                }
              }
            };
          }
        };
      })
      .catch(error => {
        console.error('❌ Service Worker registration failed:', error);
      });
  });
}
