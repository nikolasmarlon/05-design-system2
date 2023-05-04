import type {StoryObj, Meta} from '@storybook/react'

import { Avatar, AvatarProps } from '@nikolas-ui/react'

export default {
    title: 'Data display/Avatar', 
    component: Avatar,  
    
    args: {
       src: 'https://github.com/nikolasmarlon.png',
       alt: 'Nikolas Marlon',
    }

}as Meta<AvatarProps>


export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined,
    }
}



 