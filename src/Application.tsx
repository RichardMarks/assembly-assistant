import * as React from 'react';

import { SysContextProvider } from './sys/providers';

import { MOVOpForm } from './components/MOVOpForm';
import { RegistersDisplay } from './components/RegistersDisplay';

export const Application = () => {
  return (
    <SysContextProvider>
      <RegistersDisplay />
      <MOVOpForm />
    </SysContextProvider>
  );
};
