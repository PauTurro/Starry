import { useNavigate, useLocation } from 'react-router-dom';
import { ROUTES } from '../constants';

const base = import.meta.env.BASE_URL;

export default function NavigationBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navigation-bar">
      <button
        className={`nav-button ${isActive(ROUTES.HOME) ? 'active' : ''}`}
        onClick={() => navigate(ROUTES.HOME)}
      >
        <img src={`${base}icons/door.png`} alt="Doors" className="nav-icon" />
      </button>

      <button
        className={`nav-button ${isActive(ROUTES.SETTINGS) ? 'active' : ''}`}
        onClick={() => navigate(ROUTES.SETTINGS)}
      >
        <img src={`${base}icons/clock.webp`} alt="Settings" className="nav-icon" />
      </button>

      <button
        className={`nav-button ${isActive(ROUTES.CAMERA) ? 'active' : ''}`}
        onClick={() => navigate(ROUTES.CAMERA)}
      >
        <img src={`${base}icons/camera.png`} alt="Camera" className="nav-icon" />
      </button>

      <button
        className={`nav-button ${isActive(ROUTES.PROFILE) ? 'active' : ''}`}
        onClick={() => navigate(ROUTES.PROFILE)}
      >
        <img src={`${base}icons/profile.png`} alt="Profile" className="nav-icon" />
      </button>
    </nav>
  );
}
