import type {StoryObj, Meta} from '@storybook/react'

import { TextInput, TextInputProps } from '@nikolas-ui/react'

export default {
    title: 'Form/Text Input', 
    component: TextInput,

}as Meta<TextInputProps>


export const Primary: StoryObj<TextInputProps> = {}

export const Disable: StoryObj<TextInputProps> = {
    args: {
        disabled: true,
    },
}

export const WithPrefix: StoryObj<TextInputProps> = {
    args: {
        prefix: 'cal.com/',
    }
}

 