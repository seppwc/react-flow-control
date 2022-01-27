import React from 'react';
import { Show } from '..';
import { SwitchContext } from './Switch';


export interface CaseProps {
  is: any
}

export const Case: React.FC<CaseProps> = ({ is, children }) => {

  const {state} = React.useContext(SwitchContext)

  return (
    <Show when={state.value === is}>{children}</Show>
  );
}
