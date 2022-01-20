import React from 'react';
import { Show, ShowProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: ShowProps = {
  
};

const setup = (props = defaultProps) => render(<Show {...props} />);

describe('Show', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
