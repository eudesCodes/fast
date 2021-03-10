import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { TBannerTypes, Banner } from 'src/ui';

export default {
    title: 'Layout/Banner',
    component: Banner,
} as Meta;

// Creating your Template
const Template: Story<TBannerTypes> = (args) => (
    <Banner {...args}>
        <div>Banner</div>
    </Banner>
);

// Bind your template
export const normal = Template.bind({});

// Add your props arguments  here
normal.args = {
    className: { variant: 'default' },
};
