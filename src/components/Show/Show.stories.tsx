import React from 'react';

export interface ShowProps {}

export const Show: React.FC<ShowProps> = ({ children }) => {
  return (
    <div>{ children }</div>
  );
}
