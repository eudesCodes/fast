import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { TCalendarTypes, Calendar } from 'src/ui';

export default {
    title: 'Utilities/Calendar',
    component: Calendar,
} as Meta;

// Creating your Template
const Template: Story<TCalendarTypes> = (args) => <Calendar {...args} />;

// Bind your template
export const Simple = Template.bind({});

// Add your props arguments  here
Simple.args = {
    id: 'calendar_id',
};
