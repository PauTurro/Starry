import React, { useState } from "react";

export default function ControlPanel({
  tokens,
  buttonState,
  buttonNames,
  isButtonDataLoaded,
  onToggle,
  onUpdateName,
  onDelete,
  onLogout,
}) {
  const [showPlusMenu, setShowPlusMenu] = useState(false);
  const [showTokenListContent, setShowTokenListContent] = useState(false);



  const handleToggle = (tok) => {
    onToggle(tok);
  };

  const handleDelete = (tok) => {
    onDelete(tok);
  };

  return (
    <div id="controlSection" className="control-panel">
      <div className="token-header">
        <button className="plus-button" onClick={() => {
          console.log("Plus button clicked!");
          setShowPlusMenu((v) => !v);
        }}>
          +
        </button>
      </div>

      <div className="toggle-buttons">
        {tokens.map((tok, idx) => {
          if (buttonState[tok] !== "open" && buttonState[tok] !== "closed") {
            return null;
          }

          return (
            <div key={tok} className="toggle-btn-wrapper">
              <button
                id={`toggle-${tok}`}
                className={`toggle-btn ${buttonState[tok] === "open" ? "open" : "closed"}`}
                onClick={() => handleToggle(tok)}
              >
                <span className="toggle-btn-text">
                  {buttonNames?.[tok] || `Button ${idx + 1}`}
                </span>
              </button>
              <button
                className="rename-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentName = buttonNames?.[tok] || `Button ${idx + 1}`;
                  const newName = prompt(`Enter new name for \"${currentName}\"`, currentName);
                  if (newName != null) onUpdateName(tok, newName.trim());
                }}
              >
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(tok);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>

      <div className={`token-list-container ${showPlusMenu ? "visible" : ""}`}>
        <button className="plus-menu-btn" onClick={() => setShowTokenListContent((v) => !v)}>
          Tokens
        </button>
        {showTokenListContent && (
          <ul className="token-list">
            {tokens.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}

        <button className="plus-menu-btn" onClick={() => alert("Settings clicked!")}>Settings</button>
        <button className="plus-menu-btn" onClick={() => alert("Friends clicked!")}>Friends</button>
      <button className="plus-menu-btn" onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
}
