import React from 'react'
import styled from 'styled-components'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import Dashboard from './Dashboard'

function Home() {
  return (
      <HomeContainer>
          <SidebarContainer>
              <Sidebar />
              </SidebarContainer>
          <MainContainer>
              <Header />
              <Dashboard/>
              
          </MainContainer>
  </HomeContainer>
  )
}

export default Home


const HomeContainer=styled.div `
    display: flex;
    width: 100vw
`
const SidebarContainer=styled.div `
width: 200px;
height: 100vh;


`

const MainContainer = styled.div `
width: calc(100vw - 200px);
height: 100vh;

display: flex;
flex-direction: column;
   
`

