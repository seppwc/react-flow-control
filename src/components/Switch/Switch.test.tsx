import React from 'react';
import { Switch, SwitchProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: SwitchProps = {
  
};

const setup = (props = defaultProps) => render(<Switch {...props} />);

describe('Switch', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
