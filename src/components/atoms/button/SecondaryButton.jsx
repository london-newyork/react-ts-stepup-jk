import styled from 'styled-components'
import { BaseButton } from './Basebutton'

export const SecondaryButton = (props) => {
    const { children, onClick } = props
    return (
        <SButton onClick={onClick}>{children}</SButton>
    )
}

const SButton = styled(BaseButton)`
    background-color: #11999e;
    max-width: 160px;
    max-height: 40px;
`