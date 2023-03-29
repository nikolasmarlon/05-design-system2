import type {StoryObj, Meta} from '@storybook/react'

import { Button } from '@nikolas-ui/react'

export default {
    title: 'Button', 
    component: Button,    

}as Meta


export const Primary: StoryObj = {
    args: {
        children: 'Enviar',
    }
}


export const Secondary: StoryObj = {}