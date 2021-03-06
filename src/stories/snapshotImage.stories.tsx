import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { TSnapshotImageTypes, SnapshotImage } from 'src/ui';

export default {
    title: 'Layout/Image',
    component: SnapshotImage,
} as Meta;

// Creating your Template
const Template: Story<TSnapshotImageTypes> = (args) => <SnapshotImage {...args} />;

// Bind your template
export const snapshot = Template.bind({});

// Add your props arguments  here
snapshot.args = {
    className: {
        rounded: 'medium',
        shadow: 'medium',
    },
};
