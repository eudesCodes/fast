import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import image from 'src/assets/images/1534162781_luffy.gif';

import { TAvatarTypes, Avatar } from 'src/ui';

export default {
    title: 'Layout/Avatar',
    component: Avatar,
} as Meta;

// Creating your Template
const Template: Story<TAvatarTypes> = (args) => <Avatar {...args} />;

// Bind your template
export const Default = Template.bind({});

// Add your props arguments  here
Default.args = {
    className: { variant: 'default' },
    item: [{ avatarImage: image, avatarName: 'hello world!' }],
    limit: 2,
};

// Bind your template
export const avatargroup = Template.bind({});

// Add your props arguments  here
avatargroup.args = {
    className: { variant: 'group' },
    item: [
        { avatarImage: image, avatarName: 'hello world!' },
        { avatarImage: image, avatarName: 'hello world!' },
        { avatarImage: image, avatarName: 'hello world!' },
    ],
    limit: 2,
};
