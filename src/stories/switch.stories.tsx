import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Switch, TSwitchTypes } from 'src/ui';

export default {
    title: 'Controls/Switch',
    component: Switch,
} as Meta;

const Template: Story<TSwitchTypes> = (args) => <Switch {...args} />;

export const theme = Template.bind({});

theme.args = {
    className: {
        variant: 'dark',
    },
    id: 'switch_id',
    type: 'checkbox',
    label: 'Hello world!',
};

export const elastic = Template.bind({});

elastic.args = {
    className: {
        variant: 'elastic',
    },
    id: 'switch_id',
    type: 'checkbox',
    label: 'Hello world!',
};

export const join = Template.bind({});

join.args = {
    className: {
        variant: 'join',
    },
    id: 'switch_id',
    type: 'checkbox',
    label: 'Hello world!',
};
