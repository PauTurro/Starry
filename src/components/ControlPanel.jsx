
// ===============================
// File: src/components/ControlPanel.jsx
// ===============================
import React, { useState, useEffect, useRef } from "react";

export default function ControlPanel({
  tokens,
  buttonState,
  isButtonDataLoaded,
  onToggle,
  onLogout,
}) {
  const [showTokens, setShowTokens] = useState(false);
  const [visible, setVisible] = useState({});
  const initialRef = useRef({});

  // Capture initial snapshot **once** per data load
  useEffect(() => {
    if (!isButtonDataLoaded) return;
    const vis = {};
    const init = {};
    tokens.forEach((tok) => {
      vis[tok] = false;
      init[tok] = buttonState[tok] ?? "closed";
    });
    setVisible(vis);
    initialRef.current = init;
    // INTENTIONALLY omit buttonState from deps so initial snapshot stays fixed
  }, [isButtonDataLoaded, tokens]);

  // Reveal button when its state changes beyond the stored initial value
  useEffect(() => {
    if (!isButtonDataLoaded) return;
    tokens.forEach((tok) => {
      const cur = buttonState[tok] ?? "closed";
      const init = initialRef.current[tok];
      if (init !== undefined && cur !== init && !visible[tok]) {
        setVisible((prev) => ({ ...prev, [tok]: true }));
      }
    });
  }, [buttonState, isButtonDataLoaded, tokens, visible]);
  useEffect(() => {
    if (!isButtonDataLoaded) return;
    tokens.forEach((tok) => {
      const cur = buttonState[tok] ?? "closed";
      const init = initialRef.current[tok];
      if (cur !== init && !visible[tok]) {
        setVisible((prev) => ({ ...prev, [tok]: true }));
      }
    });
  }, [buttonState, isButtonDataLoaded, tokens, visible]);

  return (
    <div id="controlSection" className="control-panel">
      <div className="token-header">
        <button className="plus-button" onClick={() => setShowTokens((v) => !v)}>+</button>
      </div>

      <div className="toggle-buttons">
        {tokens.map((tok, idx) =>
          visible[tok] && (
            <button
              key={tok}
              id={`toggle-${tok}`}
              className={`toggle-btn ${buttonState[tok] === "open" ? "open" : "closed"}`}
              onClick={() => onToggle(tok)}
            >
              Button {idx + 1} {buttonState[tok] === "open" ? "Open" : "Closed"}
            </button>
          )
        )}
      </div>

      <button id="logoutBtn" onClick={onLogout}>Logout</button>

      <div className={`token-list-container ${showTokens ? "visible" : ""}`}>
        <ul className="token-list">
          {tokens.map((t) => (<li key={t}>{t}</li>))}
        </ul>
      </div>
    </div>
  );
}
