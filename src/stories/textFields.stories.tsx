import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MicrophoneIcon, UserIcon } from 'src/icons';

import { TextField, TTextFieldTypes } from 'src/ui';

export default {
    title: 'Controls/TextField',
    component: TextField,
} as Meta;

const Template: Story<TTextFieldTypes> = (args) => <TextField {...args} />;

export const floating = Template.bind({});

floating.args = {
    leftIcon: <UserIcon className="w-4 h-4" />,
    rightIcon: <MicrophoneIcon className="w-4 h-4" />,
    className: {
        variant: 'floating',
        shadow: 'medium',
        border: 'purple',
        rounded: 'full',
    },
    id: 'InputField_id',
    type: 'text',
    label: 'hello world!',
};
