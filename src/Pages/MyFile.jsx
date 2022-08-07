import React from 'react'
import styled from 'styled-components'
import Cards from '../Components/Cards'

function MyFile() {
  return (
    <Container>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
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
