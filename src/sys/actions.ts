import { SysRegId } from './state';

export enum SysActions {
  Reset = 'reset',
  SetRegister = 'setRegister',
}

export function resetAction() {
  return <const>{
    type: SysActions.Reset,
  };
}

export function setRegisterAction(register: SysRegId, value: number) {
  return <const>{
    type: SysActions.SetRegister,
    register,
    value,
  };
}

export type SysAction = ReturnType<
  typeof resetAction | typeof setRegisterAction
>;
