import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Case, Switch } from '.';

export default {
  title: 'Switch',
  component: Switch,
  argTypes:{
    value: {
      options: ['foo', 'bar', 'baz'],
      control: {type: "select"}
    }
  }
} as ComponentMeta<typeof Switch>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Switch > = (args) =>(
    <Switch {...args}>
      <Case is={"foo"}><div>foo</div></Case>
      <Case is={'foo'}><div>bar</div></Case>
      <Case is={'baz'}><div>baz</div></Case>
    </Switch>);

//👇 Each story then reuses that template
export const WithoutFallback = Template.bind({});
WithoutFallback.args = { value: 'foo' };

