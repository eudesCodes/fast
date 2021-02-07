import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Checkbox, TCheckboxTypes } from 'src/ui';

export default {
    title: 'Controls/Checkbox',
    component: Checkbox,
} as Meta;

const Template: Story<TCheckboxTypes> = (args) => <Checkbox {...args} />;

export const normal = Template.bind({});

normal.args = {
    className: {
        variant: 'normal',
    },

    type: 'checkbox',
    label: 'Hello world!',
};

export const chippy = Template.bind({});

chippy.args = {
    className: {
        variant: 'chippy',
    },

    type: 'checkbox',
    label: 'Hello world!',
};

export const task = Template.bind({});

task.args = {
    className: {
        variant: 'task',
    },

    type: 'checkbox',
    label: 'Hello world!',
};

export const radio = Template.bind({});

radio.args = {
    className: {
        variant: 'radio',
    },

    type: 'radio',
    label: 'Hello world!',
};
