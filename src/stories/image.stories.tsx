import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import imageLarge from 'src/assets/images/1534162781_luffy_2.gif';

import { Image, TImageTypes } from 'src/ui';

export default {
    title: 'Utilities/Image',
    component: Image,
} as Meta;

const Template: Story<TImageTypes> = (args) => <Image {...args} />;

export const normal = Template.bind({});

normal.args = {
    className: {
        rounded: 'medium',
        classname: '',
    },
    label: 'hello world',
    id: 'image_id',
    src: imageLarge,
};
