import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'SADSA asdad asdas as',
    text: 'aslkmdsakmd kamsdksamd aksmdas kmdas dkm',
};

export const Error = Template.bind({});
Error.args = {
    title: 'SADSA asdad asdas as',
    text: 'aslkmdsakmd kamsdksamd aksmdas kmdas dkm',
    theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'SADSA asdad asdas as',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'aslkmdsakmd kamsdksamd aksmdas kmdas dkm',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'SADSA asdad asdas as',
    text: 'aslkmdsakmd kamsdksamd aksmdas kmdas dkm',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'SADSA asdad asdas as',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'aslkmdsakmd kamsdksamd aksmdas kmdas dkm',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
