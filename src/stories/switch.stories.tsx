import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Switch, TSwitchTypes } from 'src/ui';

export default {
    title: 'Controls/Switch',
    component: Switch,
} as Meta;

const Template: Story<TSwitchTypes> = (args) => <Switch {...args} />;

export const dark = Template.bind({});

dark.args = {
    className: {
        variant: 'dark',
    },
    id: 'switch_id',
    type: 'checkbox',
};

export const elastic = Template.bind({});

elastic.args = {
    className: {
        variant: 'elastic',
    },
    id: 'switch_id',
    type: 'checkbox',
};

export const slider = Template.bind({});

slider.args = {
    className: {
        variant: 'join',
    },
    id: 'switch_id',
    type: 'checkbox',
};
