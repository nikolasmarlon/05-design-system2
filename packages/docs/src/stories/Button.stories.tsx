import type {StoryObj, Meta} from '@storybook/react'

import { Button, ButtonProps} from '@nikolas-ui/react'

export default {
    title: 'Button', 
    component: Button,  
    
    args: {
        children: 'Enviar',
    }

}as Meta<ButtonProps>


export const Primary: StoryObj<ButtonProps> = {}


export const big: StoryObj<ButtonProps> = {
    args:{
        size: 'big',
    },
}