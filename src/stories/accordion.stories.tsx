import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { TAccordionTypes, Accordion } from 'src/ui';

export default {
    title: 'Layout/Accordion',
    component: Accordion,
} as Meta;

// Creating your Template
const Template: Story<TAccordionTypes> = (args) => (
    <Accordion {...args}>
        <div title="Heading 1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed metus tincidunt,
            sagittis lorem elementum, blandit enim. Etiam in quam eu felis tempus pellentesque.
            Etiam ac massa vel justo suscipit vehicula quis sit amet risus.
        </div>
        <div title="Heading 2">Content</div>
    </Accordion>
);

// Bind your template
export const normal = Template.bind({});

// Add your props arguments  here
normal.args = {
    className: { variant: 'normal' },
};
