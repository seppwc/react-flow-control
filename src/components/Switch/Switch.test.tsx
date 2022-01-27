import React from 'react';
import { Switch, SwitchProps } from '..';
import { render, screen } from '@testing-library/react';
import { Case } from '.';

const defaultProps: Omit<SwitchProps,'children'> = {
  value: "foo",
};

const setup = (props = defaultProps, children = ['foo', 'bar', 'baz']) => render(<Switch {...props}>{children.map((v,i)=>(<Case key={i} is={v}><p data-testid="case">{v}</p></Case>))}</Switch>);

describe('Switch', () => {
  it('renders without erro', () => {
    setup()
    expect(screen.getAllByTestId('case').length).toEqual(1)
  });


  it('should render multiple children when cases equal value', ()=>{
    setup({value: "foo"}, ['foo', 'foo', 'foo'])
    expect(screen.getAllByTestId('case').length).toEqual(3)
  })
});
