import React from 'react';
import { For, ForProps } from '.';
import { render, screen } from '@testing-library/react';

const defaultProps: ForProps = {
  
};

const setup = (props = defaultProps) => render(<For {...props} />);

describe('For', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
