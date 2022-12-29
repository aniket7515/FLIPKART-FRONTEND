import React,{Fragment} from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { Box,styled } from '@mui/material'

const Component= styled(Box)`
    padding:20px 10px;
    background-color:#f2f2f2;
`

const Home = () => {
  return (
    
        <Fragment>
            <Navbar/>
            <Component>
                 <Banner/>
            </Component>
            
        </Fragment>
        
    
    
  )
}

export default Home