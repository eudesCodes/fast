import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { TDatepickerTypes, Datepicker } from 'src/ui';

export default {
    title: 'Utilities/Datepicker',
    component: Datepicker,
} as Meta;

// Creating your Template
const Template: Story<TDatepickerTypes> = (args) => <Datepicker {...args} />;

// Bind your template
export const Simple = Template.bind({});

// Add your props arguments  here
Simple.args = {
    id: 'datepicker_id',
    name: 'datepicker_name',
};
