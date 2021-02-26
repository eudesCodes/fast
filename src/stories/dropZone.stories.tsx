import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DropZone, TDropZoneTypes } from 'src/ui';

export default {
    title: 'Controls/DropZone',
    component: DropZone,
} as Meta;

const Template: Story<TDropZoneTypes> = (args) => <DropZone {...args} />;

export const Default = Template.bind({});

Default.args = {
    id: 'InputField_id',
};
