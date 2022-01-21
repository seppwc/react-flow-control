// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Show } from './Show';

export default {
  title: 'Show',
  component: Show,
} as ComponentMeta<typeof Show>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Show> = (args) => <Show {...args}><p>This is the showing content</p></Show>;

//👇 Each story then reuses that template
export const WithoutFallback = Template.bind({});
WithoutFallback.args = { when: true };

export const WithFallBack = Template.bind({});
WithFallBack.args = { when: true, fallback: ()=> <p>This is the Fallback content</p> };