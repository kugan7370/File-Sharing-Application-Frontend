import React, { useState } from 'react'
import styled from 'styled-components'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import AllUserProfile from '../Components/AllUserProfile'

function SelectShare() {
  const { id } = useParams()
  const { AllUsers } = useSelector((state) => state.allUser)
  const { current_user } = useSelector((state) => state.user)
  return (
    <Container>
      {AllUsers &&
        current_user &&
        AllUsers.filter(
          (user) => user._id != current_user.user._id,
        ).map((user) => <AllUserProfile user={user} fileId={id} />)}
    </Container>
  )
}

export default SelectShare

const Container = styled.div`
  width: 40%;
  margin: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  padding: 20px;
  max-width: 500px;
  overflow-y: scroll;
`
