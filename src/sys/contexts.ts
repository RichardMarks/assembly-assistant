import * as React from 'react';
import { useSysReducer } from './reducers';
import { initialSysState } from './state';

export type SysContextType = ReturnType<typeof useSysReducer>;

export const SysContext = React.createContext<SysContextType>([
  initialSysState,
  () => null,
]);

export const useSys = () => React.useContext<SysContextType>(SysContext);
