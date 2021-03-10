import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ToastProvider, Toast } from 'src/ui';

export default {
    title: 'Contexts/ToastContext',
    component: ToastProvider,
} as Meta;

// Creating your Template
const Template: Story = () => (
    <ToastProvider className={{ position: 'bottom-center' }}>
        <Toast />
    </ToastProvider>
);

// Bind your template
export const context = Template.bind({});
