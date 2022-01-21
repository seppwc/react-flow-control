
import React from 'react';


type EachType<T> = {
  each: T[]
  children: (value:T , index: number, array: T[]) => JSX.Element
}


export type ForProps<T> = EachType<T>

export function For<T>(props: ForProps<T>): JSX.Element {
  if(props.each) {
    return (<>
      {props.each.map((v,i,a)=><React.Fragment key={String(v)}>{props.children(v,i,a)}</React.Fragment>)}</>)
  }

  return <></>
}

