import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Pagination, TPaginationTypes } from 'src/ui';

export default {
    title: 'Utilities/Pagination',
    component: Pagination,
} as Meta;

const Template: Story<TPaginationTypes> = (args) => <Pagination {...args} />;

export const normal = Template.bind({});

normal.args = {
    className: {
        variant: 'normal',
    },
    visibleNumbers: 5,
    page: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
};
