import React, { useEffect, useRef } from "react";
import { useAppContext } from "../hooks/useAppContext";
import ErrorBoundary from "./ErrorBoundary";

function SettingsPageContent() {
  const { settingsMessages } = useAppContext();
  const endRef = useRef(null);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [settingsMessages]);

  return (
    <div className="settings-page-screen">
      <div className="settings-content">
        <div style={{ marginTop: 10, paddingBottom: "10px" }}>
          {settingsMessages?.length > 0 ? (
            settingsMessages.map((msg, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginBottom: "10px"
                }}
              >
                <div
                  style={{
                    backgroundColor: "#a575ee",
                    padding: "10px 20px",
                    borderRadius: "30px",
                    maxWidth: "85%",
                    color: "#0c001e",
                    fontSize: "19px",
                    fontWeight: 470,
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0)",
                    lineHeight: "1.5"
                  }}
                >
                  {msg}
                </div>
              </div>
            ))
          ) : (
            <p style={{ color: "#8a6bb3", textAlign: "center" }}>No activity yet</p>
          )}
          <div ref={endRef} />
        </div>
      </div>
    </div>
  );
}

export default function SettingsPage() {
  return (
    <ErrorBoundary>
      <SettingsPageContent />
    </ErrorBoundary>
  );
}
