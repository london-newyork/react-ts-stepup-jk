import styled from 'styled-components'
import { BaseButton } from './Basebutton'

export const PrimaryButton = (props) => {
    const { children } = props
    return (
        <SButton>{children}</SButton>
    )
}

const SButton = styled(BaseButton)`
    background-color: #405142;
    min-width: 100px;
    max-width: 140px;
    max-height: 40px;
`