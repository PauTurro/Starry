import React from 'react';
import { useFirebase } from '../hooks/useFirebase';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants';

export default function ProfilePage() {
  const { user, logout } = useFirebase();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate(ROUTES.AUTH);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleOptionClick = (label) => {
    if (label === "Logout") {
      handleLogout();
    }
    // Add other option handlers here as needed
  };

  return (
    <div className="profile-page-screen">
      <div className="profile-content">
        {/* Profile icon */}
        <div
          style={{
            backgroundColor: '#ffc4e1',
            width: 100,
            height: 100,
            borderRadius: '50%',
            marginBottom: 20,
          }}
        />

        {/* Name and email */}
        <h2 style={{ margin: 0, fontSize: 24, color: '#2b2b2b' }}>User</h2>
        <p style={{ marginTop: 4, color: '#666', fontSize: 16 }}>{user ? user.email : 'Loading...'}</p>

        {/* Option sections */}
        <div style={{ marginTop: 40, width: '100%' }}>
          {["Account", "Notifications", "Privacy"].map((label) => (
            <div
              key={label}
              style={{
                backgroundColor: '#fff',
                padding: '18px 20px',
                borderRadius: 16,
                marginBottom: 16,
                fontSize: 18,
                fontWeight: 600,
                color: '#1e1e1e',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.01)',
                cursor: 'pointer',
              }}
              onClick={() => handleOptionClick(label)}
            >
              <span>{label}</span>
              <span style={{ fontSize: 20, color: '#888' }}>›</span>
            </div>
          ))}
          
          {/* Logout button with different styling */}
          <div
            style={{
              backgroundColor: '#fff',
              padding: '18px 20px',
              borderRadius: 16,
              marginBottom: 16,
              fontSize: 18,
              fontWeight: 600,
              color: '#e74c3c',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.01)',
              cursor: 'pointer',
              border: '1px solid #e74c3c',
            }}
            onClick={() => handleLogout()}
          >
            <span>Logout</span>
            <span style={{ fontSize: 20, color: '#e74c3c' }}>›</span>
          </div>
        </div>
      </div>
    </div>
  );
}
