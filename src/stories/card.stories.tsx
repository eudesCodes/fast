import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { TCardTypes, Card } from 'src/ui';

export default {
    title: 'Layout/Card',
    component: Card,
} as Meta;

// Creating your Template
const Template: Story<TCardTypes> = (args) => <Card {...args} />;

// Bind your template
export const skeleton = Template.bind({});

// Add your props arguments  here
skeleton.args = {
    className: { shadow: 'medium', rounded: 'medium' },
};
