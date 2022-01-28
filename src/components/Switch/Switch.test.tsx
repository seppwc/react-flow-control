import React from 'react';
import { Switch, SwitchProps } from '..';
import { render, screen } from '@testing-library/react';
import { Case } from '.';

const defaultProps: Omit<SwitchProps,'children'> = {
  value: "foo",
  type: "all"
};

const setup = (props = defaultProps, children = ['foo', 'bar', 'baz']) => render(<Switch {...props}>{children.map((v,i)=>(<Case key={i} is={v}><p data-testid={`case-${i}`}>{v}</p></Case>))}</Switch>);

describe('Switch', () => {
  it('renders without error', () => {
    setup()
    expect(screen.getAllByTestId(/case/).length).toEqual(1)
  });


  it('should render multiple children when cases equal value', ()=>{
    setup({value: "foo"}, ['foo', 'foo', 'foo'])
    expect(screen.getAllByTestId(/case/).length).toEqual(3)
    expect(screen.getAllByText('foo').length).toEqual(3)
  })


  it('should render first child when type = first', ()=>{
    setup({value: "foo", type: "first"}, ['foo', 'bar', 'foo'])
    expect(screen.getAllByTestId(/case/).length).toEqual(1)
    expect(screen.getAllByText('foo').length).toEqual(1)

    expect(screen.getAllByTestId('case-0').length).toEqual(1)

  })


  it('should render last child when type = first', ()=>{
    setup({value: "foo", type: "last"}, ['foo', 'bar', 'foo'])
    expect(screen.getAllByTestId(/case/).length).toEqual(1)
    expect(screen.getAllByText('foo').length).toEqual(1)
    expect(screen.getAllByTestId('case-2').length).toEqual(1)
  })
});
