import * as React from 'react';
import { SysAction, SysActions } from './actions';
import { MEM_SZ } from './constants';
import { initialSysState, SysState } from './state';

export function sysReducer(state: SysState, action: SysAction) {
  switch (action.type) {
    case SysActions.Reset: {
      const mem = new Array(MEM_SZ).fill(0);
      return { ...initialSysState, mem };
    }

    case SysActions.SetRegister: {
      return { ...state, [action.register]: action.value };
    }

    default:
      return state;
  }
}

export function useSysReducer(state = initialSysState) {
  return React.useReducer(sysReducer, state);
}
