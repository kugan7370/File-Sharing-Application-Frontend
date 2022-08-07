import React from 'react'
import styled from 'styled-components'
import DescriptionIcon from '@mui/icons-material/Description'
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'

function Cards() {
    return (
        <CardContainer>
            <CardIcon>
                <DescriptionIcon fontSize="60px" />
            </CardIcon>
            <CardDetails>
                <CartName>kugan.pdf</CartName>
                <CartDate>2 min ago</CartDate>
            </CardDetails>

            <Options>
                <Icons>
                    <ShareOutlinedIcon fontSize="10" />
                </Icons>
                <Icons>
                    <ArrowCircleDownOutlinedIcon fontSize="12" />
                </Icons>
            </Options>
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
