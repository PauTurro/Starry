import React, { useState, useRef, useEffect } from "react";

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
  const [isEditMode, setIsEditMode] = useState(false);
  const [isVibrating, setIsVibrating] = useState(false);
  const buttonRefs = useRef([]);

  useEffect(() => {
    buttonRefs.current = buttonRefs.current.slice(0, tokens.length);
  }, [tokens]);

  useEffect(() => {
    setIsVibrating(isEditMode);
  }, [isEditMode]);

  const handleToggle = (tok) => {
    onToggle(tok);
  };

  const handleDelete = (tok) => {
    onDelete(tok);
  };

  const handleAnimationIteration = (e) => {
    if (!isVibrating) {
      e.target.classList.remove('is-vibrating');
    }
  };

  const handlePlusButtonClick = () => {
    setIsEditMode((v) => !v);
    setShowPlusMenu((v) => !v);
  };


  return (
    <div id="controlSection" className="control-panel">
      <div className="token-header">
        <button className="plus-button" onClick={handlePlusButtonClick}>
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
                ref={el => buttonRefs.current[idx] = el}
                id={`toggle-${tok}`}
                className={`toggle-btn ${buttonState[tok] === "open" ? "open" : "closed"} ${isVibrating ? 'is-vibrating' : ''}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
                onClick={() => {
                  if (isEditMode) {
                    const currentName = buttonNames?.[tok] || `Button ${idx + 1}`;
                    const newName = prompt(`Enter new name for \"${currentName}\"`, currentName);
                    if (newName != null) onUpdateName(tok, newName.trim());
                  } else {
                    handleToggle(tok);
                  }
                }}
                onAnimationIteration={handleAnimationIteration}
              >
                <span className="toggle-btn-text">
                  {buttonNames?.[tok] || `Button ${idx + 1}`}
                </span>
              </button>
            </div>
          );
        })}
      </div>

      <div className={`token-list-container ${showPlusMenu ? "visible" : ""}`} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '5px' }}>
        <button className="plus-menu-btn small-btn" onClick={() => setShowTokenListContent((v) => !v)}>
          Tokens
        </button>
        {showTokenListContent && (
          <ul className="token-list">
            {tokens.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
        <button className="plus-menu-btn settings-button small-btn" onClick={() => alert("Settings clicked!")}>
          <img src="icons/gear.png" alt="Settings" className="settings-icon" />
        </button>
        <button className="plus-menu-btn small-btn" onClick={() => alert("Friends clicked!")}>Friends</button>
        <button className="plus-menu-btn small-btn" onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
}
