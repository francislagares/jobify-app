export enum ActionType {
  DISPLAY_ALERT = 'SHOW_ALERT',
  CLEAR_ALERT = 'CLEAR_ALERT',
}

export interface IDisplayAlert {
  type: ActionType.DISPLAY_ALERT;
}

export interface IClearAlert {
  type: ActionType.CLEAR_ALERT;
}

export type IAction = IDisplayAlert | IClearAlert;
