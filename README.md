# My Starry PWA - Smart Door Control System

A modern Progressive Web App (PWA) for controlling smart door locks and monitoring security cameras through Firebase integration.

## 🚀 Features

- **Smart Door Control**: Toggle door locks remotely with real-time status updates
- **Camera Monitoring**: View live camera feeds from connected devices
- **User Authentication**: Secure login/registration system
- **Activity Logging**: Track all door operations with timestamps
- **Responsive Design**: Works seamlessly on mobile and desktop
- **PWA Support**: Install as a native app on mobile devices

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Routing**: React Router DOM
- **State Management**: React Context API with useReducer
- **Backend**: Firebase (Authentication, Realtime Database)
- **Styling**: CSS3 with custom design system
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Auth.jsx        # Authentication component
│   ├── ControlPanel.jsx # Main door control interface
│   ├── SettingsPage.jsx # Activity log and settings
│   ├── CameraPage.jsx   # Camera monitoring
│   ├── ProfilePage.jsx  # User profile management
│   ├── NavigationBar.jsx # Bottom navigation
│   ├── Layout.jsx       # App layout wrapper
│   └── ProtectedRoute.jsx # Route protection
├── contexts/            # React contexts
│   └── AppContext.jsx   # Global app state management
├── hooks/               # Custom React hooks
│   └── useFirebase.js   # Firebase integration hook
├── constants/           # Application constants
│   └── index.js         # Centralized configuration
├── firebaseConfig.js    # Firebase configuration
├── App.jsx              # Main app component
└── main.jsx            # App entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Firebase project setup

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd copy
```

2. Install dependencies:
```bash
npm install
```

3. Set up Firebase:
   - Create a Firebase project
   - Enable Authentication and Realtime Database
   - Update `src/constants/index.js` with your Firebase config

4. Start the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## 🏗️ Architecture

### State Management
- **AppContext**: Manages global app state (settings messages, errors, camera states)
- **useFirebase**: Custom hook for Firebase operations and authentication
- **React Router**: Handles navigation and route protection

### Component Organization
- **Layout Components**: Handle common UI structure
- **Page Components**: Main application views
- **Feature Components**: Reusable UI elements
- **Protected Routes**: Authentication-based access control

### Constants & Configuration
- **Centralized Constants**: All magic numbers and strings in one place
- **Route Definitions**: Consistent routing across the app
- **Error Messages**: Standardized error handling

## 🔧 Configuration

### Firebase Setup
1. Create a Firebase project
2. Enable Email/Password authentication
3. Set up Realtime Database with security rules
4. Update the Firebase configuration in `src/constants/index.js`

### Environment Variables
The app uses Firebase configuration directly. For production, consider using environment variables:

```javascript
// .env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
// ... other Firebase config
```

## 📱 PWA Features

- **Service Worker**: Offline functionality and caching
- **Manifest**: App installation and branding
- **Responsive Design**: Mobile-first approach
- **Touch Optimized**: Optimized for touch interactions

## 🎨 Design System

### Color Palette
- Primary: `#faaccc` (Pink)
- Secondary: `#ffc8e1` (Light Pink)
- Text: `#372d2d` (Dark Gray)
- Background: `#fde6f3` (Light Background)

### Typography
- Font Family: Roboto
- Font Weight: 480 (Regular)
- Responsive sizing with rem units

## 🔒 Security

- **Authentication**: Firebase Auth with email/password
- **Route Protection**: Protected routes for authenticated users
- **Data Validation**: Input validation and error handling
- **Secure Communication**: HTTPS and Firebase security rules

## 🚀 Deployment

### GitHub Pages
```bash
npm run deploy
```

### Other Platforms
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the Firebase documentation
- Review the component documentation

## 🔄 Version History

- **v1.0.0**: Initial release with basic door control
- **v1.1.0**: Added camera monitoring
- **v1.2.0**: Improved UI/UX and PWA features
- **v2.0.0**: Complete codebase reorganization with React Router and Context API
