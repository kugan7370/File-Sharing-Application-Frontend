import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import styled from 'styled-components'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import Dashboard from './Dashboard'
import MyFile from './MyFile'
import { useDispatch, useSelector } from 'react-redux'
import {
  get_File_Failed,
  get_File_request,
  get_File_Success,
} from '../Redux/FileSlicer'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Profile from './Profile'
import SelectShare from './SelectShare'
import { All_user_Failed, All_user_Success } from '../Redux/AllUserSlicer'
import {
  get_shared_Failed,
  get_shared_request,
  get_shared_Success,
} from '../Redux/SharedFileSlicer'
import SharedFile from './SharedFile'

function Home() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const get_File_data = async () => {
      try {
        dispatch(get_File_request())
        await axios.get('auth/getfile').then((result) => {
          dispatch(get_File_Success(result.data))
          navigate('/')
        })
      } catch (error) {
        dispatch(get_File_Failed())
        alert(error.response.data.message)
      }
    }
    get_File_data()
  }, [])

  useEffect(() => {
    const get_All_User_data = async () => {
      try {
        dispatch(All_user_Failed())
        await axios.get('auth/getalluser').then((result) => {
          dispatch(All_user_Success(result.data))
          navigate('/')
        })
      } catch (error) {
        dispatch(All_user_Failed())
        alert(error.response.data.message)
      }
    }
    get_All_User_data()
  }, [])

  useEffect(() => {
    const get_Shared_Files = async () => {
      try {
        dispatch(get_shared_request())
        await axios.get('auth/getsharedfile').then((result) => {
          dispatch(get_shared_Success(result.data))
          navigate('/')
        })
      } catch (error) {
        dispatch(get_shared_Failed())
        alert(error.response.data.message)
      }
    }
    get_Shared_Files()
  }, [])

  return (
    <HomeContainer>
      <Sidebar />
      <MainContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/myfile" element={<MyFile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/share/:id" element={<SelectShare />} />
          <Route path="/shared/" element={<SharedFile />} />
        </Routes>
      </MainContainer>
    </HomeContainer>
  )
}

export default Home

const HomeContainer = styled.div`
  display: flex;
`
const MainContainer = styled.div`
  flex: 7;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
`
