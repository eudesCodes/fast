import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { TCardImageTypes, CardImage } from 'src/ui';

export default {
    title: 'Layout/CardImage',
    component: CardImage,
} as Meta;

// Creating your Template
const Template: Story<TCardImageTypes> = (args) => <CardImage {...args} />;

// Bind your template
export const normal = Template.bind({});

// Add your props arguments  here
normal.args = {
    className: {
        rounded: 'medium',
        shadow: 'medium',
    },
};
