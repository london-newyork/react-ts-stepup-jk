import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../providers/UserProvider'
import { SecondaryButton } from '../atoms/button/SecondaryButton'
import { SearchInput } from '../molecules/SearchInput'
import { UserCard } from '../organismes/user/UserCard'

const users = [...Array(10).keys()].map(((val)=>{
    return {
      id: val,
      name: `Nancy${val}`,
      image: "https://source.unsplash.com/N04FIfHhv_k",
      phone: '0000-0000-0000',
      email: '12345@example.com',
      company: {
        name: 'テスト株式会社'
      },
      website: 'http://google.com'
    }
  }))

export const Users = () => {
    const { userInfo, setUserInfo } = useContext(UserContext)
    const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin })
    return (
        <SContainer>
            <h2>ユーザー　一覧</h2>
            <SearchInput />
            <br />
            <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
            <SUserArea>
                {users.map((obj)=>(
                    <UserCard key={obj.id} user={obj} />
                ))}
            </SUserArea>
        </SContainer>
    )
}

const SContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`

const SUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
`