import React from 'react'

export interface ShowProps {
  when: boolean
  fallback?: () => JSX.Element
  children: React.ReactNode
}

export function Show({
  when,
  fallback,
  children
}: ShowProps): JSX.Element {
  return Boolean(when) ? <>{children}</> : fallback ? fallback() : <></>
}
