import { useReducer, useEffect, useCallback } from 'react';
import { UI } from '../constants';
import { CONTEXT_ACTIONS } from '../constants/contextActions';
import { appReducer, initialState } from './appReducer';
import { AppContext } from './AppContextInstance';

const init = (initialState) => {
  const savedMessages = localStorage.getItem(UI.STORAGE_KEYS.SETTINGS_MESSAGES);
  if (savedMessages) {
    try {
      const parsedMessages = JSON.parse(savedMessages);
      return { ...initialState, settingsMessages: parsedMessages };
    } catch (error) {
      console.error('Failed to parse settings messages:', error);
    }
  }
  return initialState;
};

// Provider component
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState, init);

  // Save settings messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(UI.STORAGE_KEYS.SETTINGS_MESSAGES, JSON.stringify(state.settingsMessages));
  }, [state.settingsMessages]);

  // Actions
  const addSettingsMessage = useCallback((message) => {
    dispatch({ type: CONTEXT_ACTIONS.ADD_SETTINGS_MESSAGE, payload: message });
  }, []);

  const setSettingsMessages = useCallback((messages) => {
    dispatch({ type: CONTEXT_ACTIONS.SET_SETTINGS_MESSAGES, payload: messages });
  }, []);

  const setError = useCallback((error) => {
    dispatch({ type: CONTEXT_ACTIONS.SET_ERROR, payload: error });
  }, []);

  const clearError = useCallback(() => {
    dispatch({ type: CONTEXT_ACTIONS.CLEAR_ERROR });
  }, []);

  const setCameraLoading = useCallback((loading) => {
    dispatch({ type: CONTEXT_ACTIONS.SET_CAMERA_LOADING, payload: loading });
  }, []);

  const setCameraFading = useCallback((fading) => {
    dispatch({ type: CONTEXT_ACTIONS.SET_CAMERA_FADING, payload: fading });
  }, []);

  const value = {
    ...state,
    addSettingsMessage,
    setSettingsMessages,
    setError,
    clearError,
    setCameraLoading,
    setCameraFading,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}