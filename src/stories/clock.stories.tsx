import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { TCountDownTypes, CountDown } from 'src/ui';

export default {
    title: 'Utilities/Clock',
    component: CountDown,
} as Meta;

// Creating your Template
const Template: Story<TCountDownTypes> = (args) => <CountDown {...args} />;

// Bind your template
export const timecircle = Template.bind({});

// Add your props arguments  here
timecircle.args = {
    endDate: new Date('1/1/2022'),
    className: {
        variant: 'timecircle',
    },
};
