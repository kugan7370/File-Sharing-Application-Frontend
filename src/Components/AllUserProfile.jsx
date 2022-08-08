import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import PublicIcon from '@mui/icons-material/Public'
import VpnLockIcon from '@mui/icons-material/VpnLock'

function AllUserProfile({ user, fileId }) {
  const { AllUsers } = useSelector((state) => state.allUser)
  const { current_user } = useSelector((state) => state.user)
  const [privates, setprivates] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleShare = async (user_id) => {
    try {
      await axios
        .post('/auth/fileshare', {
          file_id: fileId,
          sender_id: current_user.user._id,
          receiver_id: user_id,
          protect: privates,
        })
        .then((result) => {
          alert(result.data)
          navigate('/')
        })
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  return (
    <InnerContainer>
      <Profile onClick={() => handleShare(user._id)}>
        <ProfileImage src={user.profile_image} />
        <ProfileName>{user.username}</ProfileName>
      </Profile>
      <ToogleButton onClick={() => setprivates(!privates)}>
        {privates ? <VpnLockIcon /> : <PublicIcon />}
      </ToogleButton>
    </InnerContainer>
  )
}

export default AllUserProfile

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  &:hover {
    background-color: #ece9e9;
  }
`
const ProfileImage = styled.img`
  height: 30px;
  font-weight: 30px;
  border-radius: 50%;
  margin-right: 10px;
`
const ProfileName = styled.h5``

const Profile = styled.div`
  display: flex;
  align-items: center;
`

const ToogleButton = styled.div``
