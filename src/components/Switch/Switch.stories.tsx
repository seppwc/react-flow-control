import React from 'react';

export interface SwitchProps {}

export const Switch: React.FC<SwitchProps> = ({ children }) => {
  return (
    <div>{ children }</div>
  );
}
