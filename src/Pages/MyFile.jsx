import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Cards from '../Components/Cards'
import { useDispatch, useSelector } from 'react-redux'

function MyFile() {
  const { Files, error } = useSelector((state) => state.file)
  const { current_user } = useSelector((state) => state.user)
  const [myFiles, setmyFiles] = useState()

  useEffect(() => {
    if (Files && current_user) {
      setmyFiles(Files.filter((file) => file.user_id == current_user.user._id))
    }
  }, [Files])

  return (
    <Container>
      {myFiles &&
        myFiles.map((myfile) => <Cards key={myfile._id} data={myfile} />)}
    </Container>
  )
}

export default MyFile

const Container = styled.div`
  width: 100%;
  padding: 50px 0px;
  padding-left: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  scroll-behavior: smooth;
`
