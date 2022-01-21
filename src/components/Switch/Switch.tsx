import React from 'react';
import './switch.scss';

export interface SwitchProps {}

export const Switch: React.FC<SwitchProps> = ({ children }) => {
  return (
    <div>{ children }</div>
  );
}
