import React, { useState } from 'react'
import styled from 'styled-components'
import DescriptionIcon from '@mui/icons-material/Description'
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'
import moment from 'moment'
import axios from 'axios'
import { get_File_Success } from '../Redux/FileSlicer'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

function Cards({ data }) {
  const dispatch = useDispatch()
  const [optionsData, setoptionsData] = useState(false)

  const FileDelete = async (id) => {
    try {
      await axios.delete(`auth/deletefile/${id}`).then(async (res) => {
        alert(res.data)
        await axios.get('auth/getfile').then((result) => {
          dispatch(get_File_Success(result.data))
        })
      })
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  const handleFileShare = async (id) => {
    try {
      await axios.post('auth/fileshare').then(async (res) => {
        alert(res.data)
      })
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  return (
    <CardContainer
      onMouseMove={() => setoptionsData(true)}
      onMouseLeave={() => setoptionsData(false)}
    >
      <CardIcon>
        <DescriptionIcon fontSize="60px" />
      </CardIcon>
      <CardDetails>
        <CartName>{data.name}</CartName>
        <CartDate>{moment(data.createdAt).format('DD MMMM YYYY')}</CartDate>
      </CardDetails>

      {optionsData ? (
        <Options>
          <Icons>
            <Link
              to={`/share/${data._id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <ShareOutlinedIcon fontSize="10" />
            </Link>
          </Icons>
          <Icons>
            <DownloadFile
              downloaded
              href={`${data.url}?dl=`}
              onClick={(e) => e.stopPropagation()}
            >
              <ArrowCircleDownOutlinedIcon fontSize="12" />
            </DownloadFile>
          </Icons>
          <Icons onClick={() => FileDelete(data._id)}>
            <DeleteForeverOutlinedIcon fontSize="12" />
          </Icons>
        </Options>
      ) : null}
    </CardContainer>
  )
}

export default Cards

const CardContainer = styled.div`
  width: 150px;
  height: 150px;
  background-color: #d9e7ff;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 15px;
  position: relative;
`
const CardIcon = styled.div`
  color: #528ffa;
  font-size: 50px;
`

const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`
const CartName = styled.span`
  font-weight: 500;
  font-size: 16px;
`
const CartDate = styled.span`
  font-size: 12px;
  font-weight: 400;
  margin-top: 5px;
`
const Options = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
`

const Icons = styled.div`
  margin: 10px;
  font-size: 15px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 50%;
  padding: 2px;
  color: #528ffa;
`
const DownloadFile = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: 15px;
`
