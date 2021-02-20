import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { TAlertTypes, Alert } from 'src/ui';

export default {
    title: 'Layout/Alert',
    component: Alert,
} as Meta;

// Creating your Template
const Template: Story<TAlertTypes> = (args) => <Alert {...args} />;

// Bind your template
export const Default = Template.bind({});

// Add your props arguments  here
Default.args = {
    className: { variant: 'default' },
};
