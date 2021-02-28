import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MicrophoneIcon } from 'src/icons';

import { Link, TLinkTypes } from 'src/ui';

export default {
    title: 'Utilities/Link',
    component: Link,
} as Meta;

const Template: Story<TLinkTypes> = (args) => <Link {...args} />;

export const icon = Template.bind({});

icon.args = {
    iconsvg: <MicrophoneIcon className="w-5 h-5 mr-2" />,
    children: 'Hello world!',
    className: {
        variant: 'icon',
    },
};

export const Default = Template.bind({});

Default.args = {
    children: 'Hello world!',
    className: {
        variant: 'default',
    },
};
