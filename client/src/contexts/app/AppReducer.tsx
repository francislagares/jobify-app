import { ActionType, IAction } from './types/Actions';

interface IState {
  isLoading: boolean;
  showAlert: boolean;
  alertText: string;
  alertType: string;
}

export const appReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case ActionType.DISPLAY_ALERT:
      return {
        ...state,
        showAlert: true,
        alertType: 'danger',
        alertText: 'Please provide all values!',
      };
    case ActionType.CLEAR_ALERT:
      return {
        ...state,
        showAlert: false,
        alertType: '',
        alertText: '',
      };
    default:
      return state;
      throw new Error(`no such action: ${action.type}`);
  }
};
