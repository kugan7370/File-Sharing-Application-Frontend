import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
      <HeaderContainer>
        
          <ProfileData>
              <Image src='https://ddgobkiprc33d.cloudfront.net/5c20071a-c083-4548-b3b8-874dd092647e.png'  alt='profile'/>
              <ProfileName>Kugan</ProfileName>
              <Logout>Logout</Logout>
          </ProfileData>
  </HeaderContainer>
  )
}

export default Header

const HeaderContainer=styled.div`
    height: 60px;
    padding: 10px 30px;
    display: flex;
    background-color: aliceblue;
`
const ProfileData = styled.div`
display: flex;
margin-left: auto;
align-items: center;
   
`
const Image=styled.img`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 20px;
`
const ProfileName=styled.h4`
      margin-right: 20px;
`

const Logout=styled.h4`
    
`