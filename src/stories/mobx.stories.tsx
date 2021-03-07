import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ExampleMobxContext } from 'src/mobx/exemple';
import { StoreProvider } from 'src/mobx/context';

export default {
    title: 'Contexts/MobxContext',
    component: StoreProvider,
} as Meta;

// Creating your Template
const Template: Story = () => (
    <StoreProvider>
        <ExampleMobxContext />
    </StoreProvider>
);

// Bind your template
export const context = Template.bind({});
