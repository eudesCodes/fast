import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, IButtonProps } from 'src/ui';

export default {
    title: 'Example/Button',
    component: Button,
} as Meta;

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    color: 'red',
};
