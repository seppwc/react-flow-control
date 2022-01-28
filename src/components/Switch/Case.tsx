import React, {FunctionComponent} from 'react';

export interface CaseProps {
  is: any
}
export interface SwitchChild<T> extends FunctionComponent<T> {
  isCase: boolean
  isDefault: boolean
}

export const Case: SwitchChild<CaseProps> = ({ children }) => {
  return (
    <>{children}</>
  );
}

Case.isCase = true
Case.isDefault = false


export const Default: SwitchChild<{children: React.ReactNode}> = ({ children }) => {
  return (
    <>{children}</>
  );
}

Default.isCase = false
Default.isDefault = true