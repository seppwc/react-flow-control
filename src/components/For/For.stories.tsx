import React from 'react';

export interface ForProps {}

export const For: React.FC<ForProps> = ({ children }) => {
  return (
    <div>{ children }</div>
  );
}
