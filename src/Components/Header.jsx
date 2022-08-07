import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

function Header() {
  const dispatch = useDispatch()

  const { current_user, error } = useSelector((state) => state.user)

  return (
    <HeaderContainer>
      {current_user && (
        <ProfileData>
          <Image src={current_user.user.profile_image} alt="profile" />

          <ProfileName>{current_user.user.username}</ProfileName>
        </ProfileData>
      )}
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  height: 60px;
  padding: 10px 30px;
  display: flex;
  background-color: aliceblue;
  position: sticky;
  top: 0;
  z-index: 999;
`
const ProfileData = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`
const Image = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 10px;
`
const ProfileName = styled.h4`
  margin-right: 20px;
`

const Logout = styled.h4``
