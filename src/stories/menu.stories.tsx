import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { MenuProvider } from 'src/ui';

export default {
    title: 'Contexts/MenuContext',
    component: MenuProvider,
} as Meta;

// Creating your Template
const Template: Story = () => (
    <MenuProvider menuContent={[{ title: 'home' }]}> Content</MenuProvider>
);

// Bind your template
export const context = Template.bind({});
