import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DragAndDropList, TDragAndDropListTypes } from 'src/ui';

export default {
    title: 'Utilities/DragAndDropList',
    component: DragAndDropList,
} as Meta;

const Template: Story<TDragAndDropListTypes> = (args) => <DragAndDropList {...args} />;

export const List = Template.bind({});

List.args = {
    id: 'dragdroplist_id',
    items: [
        { content: '🇨🇬 Congo-brazzaville' },
        { content: '🇨🇩 Congo-Kinshassa' },
        { content: '🇬🇭 Ghana' },
        { content: '🇫🇷 France' },
        { content: '🇺🇸 United States of America' },
    ],
};
