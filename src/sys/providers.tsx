import * as React from 'react';
import { SysContext } from './contexts';
import { useSysReducer } from './reducers';

export const SysContextProvider = ({ children }) => {
  const value = useSysReducer();

  return <SysContext.Provider value={value} children={children} />;
};
