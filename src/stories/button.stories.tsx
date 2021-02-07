import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { UserIcon } from 'src/icons';

import { Button, TButtonTypes } from 'src/ui';

export default {
    title: 'Controls/Button',
    component: Button,
} as Meta;

const Template: Story<TButtonTypes> = (args) => <Button {...args} />;

export const icon = Template.bind({});

icon.args = {
    iconsvg: <UserIcon className="w-8 h-8" />,
    label: 'Hello world!',
    className: {
        shadow: 'medium',
        variant: 'large',
        background: 'purple',
        rounded: 'full',
    },
};

export const Default = Template.bind({});

Default.args = {
    className: {
        shadow: 'medium',
        variant: 'small',
        background: 'purple',
        rounded: 'medium',
        padding: 'small',
    },

    label: 'Hello world!',
};
