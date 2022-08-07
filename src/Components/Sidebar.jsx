import React from 'react'
import styled from 'styled-components'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
function Sidebar() {
    return (
        <SidebarContainer>
            <Logo src='https://cdn.softwarereviews.com/production/logos/offerings/5428/large/sharefile-logo.png?1647280116' alt='logo'/>
            <SideNavbar>
                <NavLinks>
                    <GridViewOutlinedIcon />
                    <NavTitle>Dashboard</NavTitle>
                </NavLinks>
                <NavLinks>
                    <FileCopyOutlinedIcon/>
                    <NavTitle>My File</NavTitle>
                </NavLinks>
                <NavLinks>
                    <ShareOutlinedIcon/>
                    <NavTitle>Shared File</NavTitle>
                </NavLinks>
                <NavLinks>
                  <AccountCircleOutlinedIcon/>
                    <NavTitle>Profile</NavTitle>
                </NavLinks>
                <NavLinks>
                    <LogoutIcon/>
                    <NavTitle>Logout</NavTitle>
                </NavLinks>
            </SideNavbar>
        </SidebarContainer>
    )
}

export default Sidebar


const SidebarContainer = styled.div`
     background-color: aliceblue;
     padding: 10px 20px;
   height: 100%;
`
const Logo = styled.img`
  height: 50px;
  width: 100px;
  object-fit: contain;
`
const SideNavbar = styled.div`
    margin-top: 30px;
`
const NavLinks = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    

`
const NavTitle = styled.h4`
margin-left: 10px;


    
`