import { useEffect, useState } from "react";
import Auth from "./components/Auth";
import ControlPanel from "./components/ControlPanel";
import { useFirebase } from "./hooks/useFirebase";

export default function App() {
  const {
    user,
    token,
    tokens,
    buttonState,
    isButtonDataLoaded,
    buttonNames, // Get button names
    updateButtonName, // Get update function
    error,
    register,
    login,
    logout,
    toggleButton,
    clearError
  } = useFirebase();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (error) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 3500); // Start fade
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, [error]);

  return (
    <div id="appContainer" className="fade-in background">
      {error && (
        <div className={`error-banner ${visible ? "visible" : "fade-out"}`}>
          {error}
        </div>
      )}

      <div className={user ? "control-panel-screen" : "container"} id="containerEl">
        <h1 className="title">{user ? "" : "Welcome to the future"}</h1>

        {!user ? (
          <Auth
            onLogin={login}
            onRegister={register}
            error={error}
            setError={clearError}
          />
        ) : (
          <ControlPanel
            token={token}
            tokens={tokens}
            buttonState={buttonState}
            buttonNames={buttonNames} // Pass names down
            isButtonDataLoaded={isButtonDataLoaded}
            onToggle={toggleButton}
            onUpdateName={updateButtonName} // Pass update function down
            onLogout={logout}
          />
        )}
      </div>
    </div>
  );
}
