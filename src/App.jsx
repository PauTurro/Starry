import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import { useFirebase } from './hooks/useFirebase';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Auth from './components/Auth';
import ControlPanel from './components/ControlPanel';
import SettingsPage from './components/SettingsPage';
import CameraPage from './components/CameraPage';
import ProfilePage from './components/ProfilePage';
import { ROUTES } from './constants';

// iOS standalone mode detection
if (window.navigator.standalone === true) {
  document.documentElement.classList.add('ios-standalone');
}

function AppContent() {
  const { user, tokens, buttonState, isButtonDataLoaded, buttonNames, updateButtonName, toggleButton, authChecked } = useFirebase();
  const location = useLocation();

  // Show loading while checking authentication
  if (!authChecked) {
    return (
      <div id="containerEl" className="container">
        <div style={{ textAlign: 'center', padding: '50px 20px' }}>
          <div style={{ fontSize: '24px', marginBottom: '20px' }}>Loading...</div>
        </div>
      </div>
    );
  }

  // Show auth screen only when user is not authenticated and auth check is complete
  if (!user) {
    return (
      <div id="containerEl" className="container">
        <h1 className="title">Welcome to the future</h1>
        <Auth />
      </div>
    );
  }

  const isCameraRoute = location.pathname === ROUTES.CAMERA;

  return (
    <div id="containerEl" className={isCameraRoute ? 'camera-page-screen' : 'control-panel-screen'}>
      <Routes>
        {/* Public route */}
        <Route 
          path={ROUTES.AUTH} 
          element={<Navigate to={ROUTES.HOME} replace />} 
        />

        {/* Protected routes */}
        <Route 
          path={ROUTES.HOME} 
          element={
            <ControlPanel
              tokens={tokens}
              buttonState={buttonState}
              buttonNames={buttonNames}
              isButtonDataLoaded={isButtonDataLoaded}
              onToggle={toggleButton}
              onUpdateName={updateButtonName}
            />
          } 
        />

        <Route 
          path={ROUTES.SETTINGS} 
          element={<SettingsPage />} 
        />

        <Route 
          path={ROUTES.CAMERA} 
          element={<CameraPage />} 
        />

        <Route 
          path={ROUTES.PROFILE} 
          element={<ProfilePage />} 
        />

        {/* Redirect root to appropriate page */}
        <Route 
          path="/" 
          element={<Navigate to={ROUTES.HOME} replace />} 
        />

        {/* Catch all route */}
        <Route 
          path="*" 
          element={<Navigate to={ROUTES.HOME} replace />} 
        />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Router basename="/STARR">
        <Layout>
          <AppContent />
        </Layout>
      </Router>
    </AppProvider>
  );
}
