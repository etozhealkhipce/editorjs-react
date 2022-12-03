import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Header, THeader } from '../src/components/Header';

const meta: Meta = {
  title: 'Welcome',
  component: Header,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<THeader> = (args) => <Header {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
