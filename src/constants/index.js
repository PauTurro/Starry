// Application Constants
export const APP_CONFIG = {
  NAME: 'My Starry PWA',
  VERSION: '1.0.0',
  NUM_TOKENS: 15,
  ERROR_TIMEOUT: 4000,
  CAMERA_FADE_DELAY: 50,
  VIBRATION_DURATION: 1000,
  MOBILE_BREAKPOINT: 600,
  DESKTOP_BREAKPOINT: 768,
};

// Firebase Configuration
export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDWMkL3P7OWlosSFXXRg8gvUQg6-7Y9uu8",
  authDomain: "esp32door-control.firebaseapp.com",
  databaseURL: "https://esp32door-control-default-rtdb.firebaseio.com/",
  projectId: "esp32door-control",
  storageBucket: "esp32door-control.appspot.com",
  messagingSenderId: "605127991992",
  appId: "1:605127991992:web:4d0dccf6ae2d874603ca4d",
  measurementId: "G-91SJ3GLZ0Z"
};

// UI Constants
export const UI = {
  ANIMATION_DELAYS: {
    BUTTON_STAGGER: 0.1,
  },
  STORAGE_KEYS: {
    SETTINGS_MESSAGES: 'settingsMessages',
  },
  BUTTON_STATES: {
    OPEN: 'open',
    CLOSED: 'closed',
    HELLO: 'hello',
  },
  ERROR_MESSAGES: {
    EMAIL_ALREADY_REGISTERED: 'Email already registered',
    WEAK_PASSWORD: '6 characters or more',
    INVALID_EMAIL: 'Invalid email',
    REGISTRATION_FAILED: 'Registration failed. Please try again.',
    WRONG_CREDENTIALS: 'Wrong email or password',
    UPDATE_NAME_FAILED: 'Failed to update name.',
  },
};

// Routes
export const ROUTES = {
  HOME: '/home',
  SETTINGS: '/settings',
  CAMERA: '/camera',
  PROFILE: '/profile',
  AUTH: '/auth',
};

// Token Generation
export const TOKEN_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; 