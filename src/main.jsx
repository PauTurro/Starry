// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // <--- This is critical

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 💥 Service Worker registration with update detection
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/STARR/service-worker.js')
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
