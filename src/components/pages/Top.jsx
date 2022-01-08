import React, { useContext }from 'react'
import styled from 'styled-components'
import { SecondaryButton } from '../atoms/button/SecondaryButton'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../providers/UserProvider'


export const Top = () => {
    const history = useHistory()
    const { setUserInfo } = useContext(UserContext)
    const onClickAdmin = () => {
        setUserInfo({ isAdmin: true })
        history.push('/users')
        // history.push({ pathname:'/users', state: { isAdmin : true }})
    }
    const onClickGeneral = () => {
        setUserInfo({ isAdmin: false })
        history.push('/users')
        // history.push({ pathname:'/users', state: { isAdmin : false }})
    }
    return (
        <SContainer>
            <h2>TOPページ</h2>
            <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
            <br />
            <br />
            <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
        </SContainer>
    )
}

const SContainer = styled.div`
    text-align: center;
`