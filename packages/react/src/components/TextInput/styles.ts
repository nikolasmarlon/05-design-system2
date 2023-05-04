import { styled } from "../../styles";


export const TextInputContainer = styled('div', {
    backgroundColor: '$gray900',
    padding: '$3 $4',
    borderRadius: '$sm',
    boxSizing: 'border-box',
    border: '2px solid $gray900',
    display: 'flex',
    alignItems: 'baseline',


    '&:has(input:focus)': {
        borderColor: '$ignite300'
    },

    '&:has(input:disable)': {
        opacity: 0.5,
        cursor: 'not-allowed',
    },
})
export const Prefix = styled('span', {
    
})
export const Input = styled('input', {
    
})