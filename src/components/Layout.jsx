import { useEffect, useState } from 'react';
import { useAppContext } from '../hooks/useAppContext';
import { useFirebase } from '../hooks/useFirebase';
import NavigationBar from './NavigationBar';

export default function Layout({ children }) {
  const { error, clearError } = useAppContext();
  const { user, authChecked } = useFirebase();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (error) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        clearError();
      }, 3500);
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, [error, clearError]);

  return (
    <div id="appContainer" className="fade-in background">
      {error && (
        <div className={`error-banner ${visible ? "visible" : "fade-out"}`}>
          {error}
        </div>
      )}
      <div className="main-content page-transition">
        {children}
      </div>
      {user && authChecked && <NavigationBar />}
    </div>
  );
} 