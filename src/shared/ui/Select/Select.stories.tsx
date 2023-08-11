import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from 'shared/ui/Select/Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'asdadad',
    options: [
        { value: '123', content: 'first' },
        { value: '1234', content: 'second' },
        { value: '1235', content: 'third' },
    ],
};
