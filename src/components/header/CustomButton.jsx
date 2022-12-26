import React from 'react'
import {Box,Button,Typography,styled} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Wrapper=styled(Box)`
    display:flex;
    margin: 0 3% 0 auto;
    & > button,& >p , & > div{
        margin-right:40px;
        font-size:14px;
    }
`
const Container=styled(Box)`
    display:flex;
`
const LoginButton = styled(Button)`
    color: #2874f0;
    background: #FFFFFF;
    textTransform: none;
    fontWeight: 600;
    borderRadius: 2;
    padding: 5px 40px;
    height: 32;
    boxShadow: none;
    
`
const CustomButton = () => {
  return (
    <Wrapper>
        <LoginButton variant='contained'>Login</LoginButton>

        <Typography style={{marginTop:3,width:135}}>Become a seller</Typography>
        <Typography>More</Typography>

        <Container>
        <ShoppingCartIcon/>
            <Typography> 
                Cart
            </Typography>
        </Container>

    </Wrapper>
  )
}

export default CustomButton