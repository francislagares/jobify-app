import React, { useContext, createContext, useReducer } from 'react';
import { appReducer } from './AppReducer';
import { ActionType } from './types/Actions';

interface IAppContext {
  isLoading: boolean;
  showAlert: boolean;
  alertText: string;
  alertType: string;
  displayAlert: () => void;
  clearAlert: () => void;
}

interface IAppProvider {
  children: React.ReactNode;
}

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
};

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppContextProvider = ({ children }: IAppProvider) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const displayAlert = () => {
    dispatch({ type: ActionType.DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: ActionType.CLEAR_ALERT });
    }, 3000);
  };

  return (
    <AppContext.Provider value={{ ...state, displayAlert, clearAlert }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};
