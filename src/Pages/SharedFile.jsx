import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Cards from '../Components/Cards'
import SharedCards from '../Components/SharedCards'

function SharedFile() {
  const { sharedFiles } = useSelector((state) => state.sharedFile)
  const { current_user, error } = useSelector((state) => state.user)

  return (
    <Container>
      {sharedFiles &&
        current_user &&
        sharedFiles
          .filter((item) => item.sender_name == current_user.user.username)
          .map((myfile) => <SharedCards key={myfile._id} data={myfile} />)}
    </Container>
  )
}

export default SharedFile

const Container = styled.div`
  width: 100%;
  padding: 50px 0px;
  padding-left: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  scroll-behavior: smooth;
`
