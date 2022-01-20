import React from 'react';
import './show.scss';

export interface ShowProps {}

export const Show: React.FC<ShowProps> = ({ children }) => {
  return (
    <div>{ children }</div>
  );
}
