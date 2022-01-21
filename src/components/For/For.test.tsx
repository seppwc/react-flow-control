import React from 'react';
import { For, ForProps } from '.';
import { render, screen } from '@testing-library/react';

const defaultProps: ForProps<string> = {
  each: ['one', 'two', 'three'],
  children: (v,i)=><h1 data-testid={`test`}>Value:{v} Index:{i}</h1>
};

const setup = (props = defaultProps) => render(<For {...props} />);

describe('For', () => {
  it('renders', () => {
    setup();
    expect(screen.getAllByTestId('test').length).toEqual(3);
  });
});
