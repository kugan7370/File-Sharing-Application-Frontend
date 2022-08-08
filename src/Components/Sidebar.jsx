import React, { useState } from 'react'
import styled from 'styled-components'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import LogoutIcon from '@mui/icons-material/Logout'
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { user_logout } from '../Redux/UserSlicer'
import axios from 'axios'
import { get_File_Success } from '../Redux/FileSlicer'
import FormData from 'form-data'
function Sidebar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logout = () => {
    dispatch(user_logout())
    navigate('/signin')
  }

  const fileupload = async (e) => {
    const form = new FormData()
    form.append('url', e.target.files[0])
    try {
      axios.post('auth/uploadFile', form).then(async (res) => {
        alert(res.data)
        await axios.get('auth/getfile').then((result) => {
          dispatch(get_File_Success(result.data))
        })
      })
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  return (
    <SidebarContainer>
      <Logo
        src="https://cdn.softwarereviews.com/production/logos/offerings/5428/large/sharefile-logo.png?1647280116"
        alt="logo"
      />
      <SideNavbar>
        <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
          <NavLinks>
            <GridViewOutlinedIcon />
            <NavTitle>Dashboard</NavTitle>
          </NavLinks>
        </Link>

        <Link
          to={'/myfile'}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <NavLinks>
            <FileCopyOutlinedIcon />
            <NavTitle>My File</NavTitle>
          </NavLinks>
        </Link>

        <Link
          to={'/myfile'}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <NavLinks>
            <ShareOutlinedIcon />
            <NavTitle>Shared File</NavTitle>
          </NavLinks>
        </Link>

        <Link
          to={'/profile'}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <NavLinks>
            <AccountCircleOutlinedIcon />
            <NavTitle>Profile</NavTitle>
          </NavLinks>
        </Link>

        <AddContainer>
          <NavLinks>
            <AddBoxOutlinedIcon />
            <NavTitle>Upload File</NavTitle>
          </NavLinks>

          <FileUpload type="file" name="url" onChange={(e) => fileupload(e)} />
        </AddContainer>

        <NavLinks onClick={logout}>
          <LogoutIcon />
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
  flex: 1;
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
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`
const NavTitle = styled.h4`
  margin-left: 10px;
  font-weight: 500;

  &:hover {
    font-weight: 800;
  }
`

const AddContainer = styled.label``

const FileUpload = styled.input`
  width: 0;
  height: 0;
`
