import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Case, Switch } from '.';

export default {
  title: 'Switch',
  component: Switch,
  argTypes:{
    value: {
      options: ['foo', 'bar', 'baz'],
      control: {type: "radio"}
    },
    type: {
      options: ['all', 'first', 'last'],
      control: {type: "radio"}
    }
  }
} as ComponentMeta<typeof Switch>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Switch > = (args) =>(
    <Switch {...args}>
      <Case is={"foo"}><div>foo1</div></Case>
      <Case is={'foo'}><div>foo2</div></Case>
      <Case is={'bar'}><div>bar1</div></Case>
      <Case is={'bar'}><div>bar2</div></Case>
      <Case is={'baz'}><div>baz1</div></Case>
      <Case is={'baz'}><div>baz2</div></Case>
    </Switch>);

//👇 Each story then reuses that template
export const WithCases = Template.bind({});
WithCases.args = { value: 'foo', type:"all" };

