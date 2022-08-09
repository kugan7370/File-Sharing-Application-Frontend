import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import PublicIcon from '@mui/icons-material/Public'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import { get_shared_Success } from '../Redux/SharedFileSlicer'

function AllUserProfile({ user, fileId }) {
  const { AllUsers } = useSelector((state) => state.allUser)
  const { current_user } = useSelector((state) => state.user)
  const { Files, error } = useSelector((state) => state.file)
  const [privates, setprivates] = useState(false)
  const [singlefiledata, setsinglefiledata] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if ((Files, fileId)) {
      setsinglefiledata(Files.filter((file) => file._id == fileId))
    }
  }, [Files, fileId])

  const handleShare = async (recevire_name) => {
    try {
      await axios
        .post('/auth/fileshare', {
          file_id: fileId,
          name: singlefiledata[0].name,
          url: singlefiledata[0].url,
          sender_name: current_user.user.username,
          receiver_name: recevire_name,
          protect: privates,
        })
        .then((result) => {
          alert(result.data)
        })
        .then(async () => {
          await axios.get('/auth/getsharedfile').then((res) => {
            dispatch(get_shared_Success(res.data))
            navigate('/')
          })
        })
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  return (
    <InnerContainer>
      <Profile onClick={() => handleShare(user.username)}>
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
