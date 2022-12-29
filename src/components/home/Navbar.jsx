import React from 'react'
import {Box,Button,Typography,styled} from '@mui/material'
import { navData } from '../constants/data'

const Component= styled(Box)`
    display:flex;
    margin:10px 130px 0 130px;
    justify-content:space-between;
`
const Container= styled(Box)`
    padding:12px 44px;
    text-align:center;
`
const Text= styled(Typography)`
    font-size:16px;
    font-weight:bold;
    font-family:inherit;
`
const Navbar = () => {
  return (
    <Component>
            {
                navData.map((a)=>(
                    < Container>
                        <img src={a.url} alt="" style={{width:"64px"}} />
                        <Text>{a.text}</Text>
                    </ Container>
                ))
            }
    </Component>
  )
}

export default Navbar;