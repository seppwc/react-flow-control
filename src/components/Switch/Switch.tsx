import React from 'react';

interface InitialState {
  value: any,
}

const initialState: InitialState = {
  value: undefined,
}

export const SwitchContext = React.createContext<{state:InitialState}>({state: initialState})

export interface SwitchProps {
  value: any,
  children: React.ReactNode
}

export const Switch: React.FC<SwitchProps> = ({value, children }) => {

  return (
    <SwitchContext.Provider value={{state:{value}}}>{ children }</SwitchContext.Provider>
  );
}
