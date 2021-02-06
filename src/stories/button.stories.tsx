import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { UserIcon } from 'src/icons';

import { Button, TButtonTypes } from 'src/ui';

export default {
    title: 'Controls/Button',
    component: Button,
} as Meta;

const Template: Story<TButtonTypes> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    iconsvg: <UserIcon className="w-8 h-8" />,
};

export const Secondary = Template.bind({});

Secondary.args = {
    className: {
        shadow: 'medium',
        variant: 'small',
        background: 'purple',
        rounded: 'full',
    },

    label: 'Mr.eudes',
};
