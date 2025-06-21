import { CONTEXT_ACTIONS } from '../constants/contextActions';

// Initial state
export const initialState = {
  settingsMessages: [],
  error: null,
  isCameraLoading: true,
  isCameraFading: false,
};

// Reducer function
export function appReducer(state, action) {
  switch (action.type) {
    case CONTEXT_ACTIONS.SET_SETTINGS_MESSAGES:
      return { ...state, settingsMessages: action.payload };
    
    case CONTEXT_ACTIONS.ADD_SETTINGS_MESSAGE:
      return { 
        ...state, 
        settingsMessages: [...state.settingsMessages, action.payload] 
      };
    
    case CONTEXT_ACTIONS.SET_ERROR:
      return { ...state, error: action.payload };
    
    case CONTEXT_ACTIONS.CLEAR_ERROR:
      return { ...state, error: null };
    
    case CONTEXT_ACTIONS.SET_CAMERA_LOADING:
      return { ...state, isCameraLoading: action.payload };
    
    case CONTEXT_ACTIONS.SET_CAMERA_FADING:
      return { ...state, isCameraFading: action.payload };
    
    default:
      return state;
  }
} 