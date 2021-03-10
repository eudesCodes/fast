import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MicrophoneIcon, SearchIcon } from 'src/icons';

import { TextSearch, TTextSearchTypes } from 'src/ui';

export default {
    title: 'Controls/TextSearch',
    component: TextSearch,
} as Meta;

const Template: Story<TTextSearchTypes> = (args) => <TextSearch {...args} />;

export const normal = Template.bind({});

normal.args = {
    firstIcon: <SearchIcon className="pl-1 w-6 h-6" />,
    secondIcon: <MicrophoneIcon className="pl-1 w-6 h-6" />,
    className: {
        variant: 'normal',
        shadow: 'medium',
        border: 'purple',
        rounded: 'full',
    },
    id: 'textSearch_id',
    type: 'search',
};

export const micro = Template.bind({});

micro.args = {
    firstIcon: <MicrophoneIcon className="pl-1 w-6 h-6" />,
    className: {
        variant: 'micro',
    },
    id: 'textSearch_id',
    type: 'search',
    text: 'Hello world!',
};
