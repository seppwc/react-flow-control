import React from 'react';
import { CaseProps, SwitchChild } from '.';

export interface SwitchProps {
  value: any;
  type?: 'first' | 'last' | 'all';
  children: React.ReactNode;
}

export const Switch= ({ value, children, type = 'all' }: SwitchProps): JSX.Element => {

  const resultsCashe: React.ReactElement[] = []
  let defaultElement = <></>


  for(const child of React.Children.toArray(children)){
    const elementChild = child as React.ReactElement
    const eltype = elementChild.type as SwitchChild<CaseProps>


    if(eltype.isDefault) {
      defaultElement = elementChild
    }

    if(eltype.isCase) {

      if(type === "first") {
        if(value === elementChild.props.is) {
          return elementChild
        }

      }

      if(type === "all") {
        if(value === elementChild.props.is) {
          resultsCashe.push(elementChild)
        }
      }

      if(type === "last") {
        if(value === elementChild.props.is) {
          resultsCashe.length = 0
          resultsCashe.push(elementChild)
        }
      }

    }
  }

  return resultsCashe.length ? <>{resultsCashe}</> :  defaultElement
};


