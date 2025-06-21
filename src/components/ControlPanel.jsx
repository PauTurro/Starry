import React, { useState, useRef, useEffect } from "react";
import { useAppContext } from "../hooks/useAppContext";
import { APP_CONFIG, UI } from "../constants";

const base = import.meta.env.BASE_URL;

export default function ControlPanel({
  tokens,
  buttonState,
  buttonNames,
  onToggle,
  onUpdateName,
}) {
  const { addSettingsMessage } = useAppContext();
  const [isEditMode, setIsEditMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const buttonRefs = useRef([]);

  useEffect(() => {
    buttonRefs.current = buttonRefs.current.slice(0, tokens.length);
  }, [tokens]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= APP_CONFIG.MOBILE_BREAKPOINT);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const shouldVibrate = isEditMode;
    buttonRefs.current.forEach((btn) => {
      if (!btn) return;
      if (shouldVibrate) {
        btn.classList.remove("vibration-ending");
        btn.classList.add("is-vibrating");
      } else {
        btn.classList.add("vibration-ending");
        setTimeout(() => {
          btn.classList.remove("is-vibrating");
          btn.classList.remove("vibrating");
          btn.classList.remove("vibration-ending");
        }, APP_CONFIG.VIBRATION_DURATION);
      }
    });
  }, [isEditMode, isMobile]);

  const handleToggle = (tok) => {
    onToggle(tok);
  };

  const handleButtonPress = (currentName, newState) => {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    });
    addSettingsMessage(`${currentName} ${newState} at ${timeString}`);
  };

  return (
    <div className="control-panel-screen">
      <div className="control-panel-header">
        <h2 className="my-doors-title">Doors</h2>
        <button
          className="plus-button"
          onClick={() => setIsEditMode((prev) => !prev)}
        ></button>
      </div>

      {/* ✅ This wrapper ensures full-width content inside the centered panel */}
      <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
        <div className="toggle-buttons">
          {tokens.map((tok, idx) => {
            const currentState = buttonState[tok];
            if (currentState !== UI.BUTTON_STATES.OPEN && currentState !== UI.BUTTON_STATES.CLOSED) return null;

            const currentName = buttonNames?.[tok] || `Button ${idx + 1}`;
            const newState = currentState === UI.BUTTON_STATES.OPEN ? UI.BUTTON_STATES.CLOSED : UI.BUTTON_STATES.OPEN;

            return (
              <div key={tok} className="toggle-btn-wrapper">
                <button
                  ref={(el) => (buttonRefs.current[idx] = el)}
                  id={`toggle-${tok}`}
                  className={`toggle-btn ${currentState}`}
                  style={{ animationDelay: `${idx * UI.ANIMATION_DELAYS.BUTTON_STAGGER}s` }}
                  onClick={() => {
                    if (isEditMode) {
                      const newName = prompt(`Rename "${currentName}"`, currentName);
                      if (newName != null) {
                        onUpdateName(tok, newName.trim());
                      }
                    } else {
                      handleToggle(tok);
                      handleButtonPress(currentName, newState);
                    }
                  }}
                >
                  <img 
                    src={`${base}icons/House1.png`} 
                    alt="House" 
                    className="toggle-btn-icon"
                  />
                  <span className="toggle-btn-text">{currentName}</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
