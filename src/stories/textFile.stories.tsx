import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DownloadIcon } from 'src/icons';
import { TextFile, TTextFileTypes } from 'src/ui';

export default {
    title: 'Controls/TextFile',
    component: TextFile,
} as Meta;

const Template: Story<TTextFileTypes> = (args) => <TextFile {...args} />;

export const Default = Template.bind({});

Default.args = {
    className: {
        variant: 'default',
    },
    label: 'hello world!',
    downloadicon: <DownloadIcon className="w-4 h-4" />,
};
