import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MicrophoneIcon } from 'src/icons';

import { Button, TButtonTypes } from 'src/ui';

export default {
    title: 'Controls/Button',
    component: Button,
} as Meta;

const Template: Story<TButtonTypes> = (args) => <Button {...args} />;

export const icon = Template.bind({});

icon.args = {
    iconsvg: <MicrophoneIcon className="w-6 h-6" />,
    label: 'Hello world!',
    className: {
        shadow: 'medium',
        variant: 'large',
        background: 'purple',
        rounded: 'full',
        width: 'medium',
    },
};

export const Default = Template.bind({});

Default.args = {
    className: {
        shadow: 'medium',
        variant: 'small',
        background: 'purple',
        rounded: 'full',
        padding: 'small',
    },

    label: 'Hello world!',
};
