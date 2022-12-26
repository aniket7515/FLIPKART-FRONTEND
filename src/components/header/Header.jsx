import React from 'react'
import {AppBar,Toolbar,styled,Box,Typography} from '@mui/material'
import Search from './Search'
import CustomButton from './CustomButton'

const StyledHeader= styled(AppBar)`
    background-color:#2874f0;
    height:56px;
`
const Componenet= styled(Box)`
    margin-left:12%;
    line-height:0;
`
const SubHeadingUrl=styled(Typography)`
    font-size: 11px;
    font-style: italic;
    margin-top:-1%;
`

const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  return (
    <div>
        <StyledHeader>
            <Toolbar style={{minHeight:"55px"}}>
                <Componenet>
                    <img src={logoURL} alt="" style={{width:"75px"}} />
                    <Box style={{display:"flex"}}>
                        <SubHeadingUrl>Explore
                            <Box component="span" style={{color:"#FFE500"}}>Plus</Box> 
                        </SubHeadingUrl>
                        <img src={subURL} alt="" style={{width:"10px"}} />
                    </Box>
                </Componenet>
                <Search/>
                <Box>
                    <CustomButton/>
                </Box>
            </Toolbar>
        </StyledHeader>
    </div>
  )
}

export default Header