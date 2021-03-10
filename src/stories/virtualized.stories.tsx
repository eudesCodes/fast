import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Virtualized, TVirtualizedTypes } from 'src/ui';

export default {
    title: 'Utilities/Virtualized',
    component: Virtualized,
} as Meta;

const Template: Story<TVirtualizedTypes> = (args) => <Virtualized {...args} />;

export const list = Template.bind({});

list.args = {
    itemLength: 20000,
    height: 26,
    item: Array(20000)
        .fill(null)
        .map((_, i) => ({ name: `Hello world - ${i}` })),
    windowHeight: 600,
};
