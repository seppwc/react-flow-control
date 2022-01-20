import React from 'react';
import './for.scss';

export interface ForProps {}

export const For: React.FC<ForProps> = ({ children }) => {
  return (
    <div>{ children }</div>
  );
}
