// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { For } from './For';

export default {
  title: 'For',
  component: For,
} as ComponentMeta<typeof For>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof For> = (args) => <For {...args}>{(v)=><h1>{v as string}</h1>}</For>;

//👇 Each story then reuses that template
export const WithArray = Template.bind({});
WithArray.args = { each: ['one', 'two', 'three'] };