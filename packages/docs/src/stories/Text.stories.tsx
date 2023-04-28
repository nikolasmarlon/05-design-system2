import type {StoryObj, Meta} from '@storybook/react'

import { Text, TextProps } from '@nikolas-ui/react'

export default {
    title: 'Typography/Text', 
    component: Text,  
    
    args: {
       children: 'Exemplo de texto',
    }

}as Meta<TextProps>


export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong Heading',
        as: 'strong',
    },
}

