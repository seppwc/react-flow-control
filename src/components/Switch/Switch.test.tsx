import React from 'react';
import { Switch, SwitchProps } from '..';
import { render, screen } from '@testing-library/react';
import { Case, Default } from '.';

const defaultProps: Omit<SwitchProps,'children'> = {
  value: "foo",
  type: "all"
};

const setup = (props = defaultProps, children = ['foo', 'bar', 'baz']) => render(
<Switch {...props}>
  <Case is={children[0]}><p data-testid={'case-0'}>{children[0]}</p></Case>
  <Case is={children[1]}><p data-testid={'case-1'}>{children[1]}</p></Case>
  <Case is={children[2]}><p data-testid={'case-2'}>{children[2]}</p></Case>
  <Default><p data-testid="default">default</p></Default>
</Switch>);

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

    expect(screen.queryAllByTestId('case-0').length).toEqual(1)

  })

  it('should render last child when type = last', ()=>{
    setup({value: "foo", type: "last"}, ['foo', 'bar', 'foo'])
    expect(screen.getAllByTestId(/case/).length).toEqual(1)
    expect(screen.getAllByText('foo').length).toEqual(1)
    expect(screen.queryAllByTestId('case-2').length).toEqual(1)
  })


  it('shouldnt render default when case is true / all', ()=>{
    setup({value: "foo", type: "all"}, ['foo', 'bar', 'foo'])
    expect(screen.getAllByTestId(/case/).length).toEqual(2)
    expect(screen.getAllByText('foo').length).toEqual(2)
    expect(screen.queryByText('default')).toBeNull()
  })


  it('should render default when all case is false / all', ()=>{
    setup({value: "baz", type: "all"}, ['foo', 'bar', 'foo'])
    expect(screen.queryAllByTestId(/case/).length).toEqual(0)
    expect(screen.queryAllByText('foo').length).toEqual(0)
    expect(screen.queryByText('default')).toBeTruthy()
  })


  it('shouldnt render default when case is true / first', ()=>{
    setup({value: "foo", type: "first"}, ['foo', 'bar', 'foo'])
    expect(screen.getAllByTestId(/case/).length).toEqual(1)
    expect(screen.getAllByText('foo').length).toEqual(1)
    expect(screen.queryByText('default')).toBeNull()
    expect(screen.queryByTestId('case-0')).toBeTruthy()
    expect(screen.queryByTestId('case-2')).toBeFalsy()
  })


  it('should render default when all case is false / first', ()=>{
    setup({value: "baz", type: "first"}, ['foo', 'bar', 'foo'])
    expect(screen.queryAllByTestId(/case/).length).toEqual(0)
    expect(screen.queryAllByText('foo').length).toEqual(0)
    expect(screen.queryByTestId('case-0')).toBeFalsy()
    expect(screen.queryByTestId('case-2')).toBeFalsy()
    expect(screen.queryByText('default')).toBeTruthy()
  })

  it('shouldnt render default when case is true / last', ()=>{
    setup({value: "foo", type: "last"}, ['foo', 'bar', 'foo'])
    expect(screen.queryAllByTestId(/case/).length).toEqual(1)
    expect(screen.queryAllByText('foo').length).toEqual(1)
    expect(screen.queryByTestId('case-0')).toBeFalsy()
    expect(screen.queryByTestId('case-2')).toBeTruthy()
    expect(screen.queryByText('default')).toBeNull()
  })


  it('should render default when all case is false / last', ()=>{
    setup({value: "baz", type: "last"}, ['foo', 'bar', 'foo'])
    expect(screen.queryAllByTestId(/case/).length).toEqual(0)
    expect(screen.queryAllByText('foo').length).toEqual(0)
    expect(screen.queryByTestId('case-0')).toBeFalsy()
    expect(screen.queryByTestId('case-2')).toBeFalsy()
    expect(screen.queryByText('default')).toBeTruthy()
  })
});
