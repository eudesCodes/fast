import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { TSnapshotVideoTypes, SnapshotVideo } from 'src/ui';

export default {
    title: 'Layout/Video',
    component: SnapshotVideo,
} as Meta;

// Creating your Template
const Template: Story<TSnapshotVideoTypes> = (args) => <SnapshotVideo {...args} />;

// Bind your template
export const snapshot = Template.bind({});

// Add your props arguments  here
snapshot.args = {
    className: {
        rounded: 'medium',
        shadow: 'medium',
    },
};
