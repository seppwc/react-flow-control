import React from 'react';
import { Show, ShowProps } from './Show';
import { render, screen } from '@testing-library/react';

const defaultProps: Omit<ShowProps, "children"> = {
  when: false,
  fallback: undefined
};

const Text = {
  default: "default text",
  fallback: "fallback text"
}

function FallBack(){
  return <p>{Text.fallback}</p>
}

const setup = (props: Partial<ShowProps>) => {
  props = {...defaultProps, ...props}
  return render(<Show {...props as ShowProps}>{Text.default}</Show>);
} 

describe('Show', () => {
  it('renders children if "when" is true, no fallback', () => {
    setup({when: true});
    expect(screen.queryByText(Text.default)).toBeTruthy()
  });

  it('does not render children if "when" is falsy, and no fallback', () => {
    setup({when: false});
    expect(screen.queryByText(Text.default)).toBeNull()
    expect(screen.queryByText(Text.fallback)).toBeNull()
  });

  it('renders fallback if "when" is falsy', () => {
    setup({when: false, fallback: FallBack});
    expect(screen.queryByText(Text.default)).toBeNull()
    expect(screen.queryByText(Text.fallback)).toBeTruthy()
  });

  it('renders children if "when" is true, with fallback', () => {
    setup({when: true, fallback: FallBack});
    expect(screen.queryByText(Text.default)).toBeTruthy()
    expect(screen.queryByText(Text.fallback)).toBeNull()
  });

});
