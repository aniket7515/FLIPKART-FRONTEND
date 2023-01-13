import React,{useState} from 'react'
import {Box,Button,Typography,styled} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../login/LoginDialog';

const Wrapper=styled(Box)`
    display:flex;
    align-items:space-between;
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
    marginLeft:10px;
`
const CustomButton = () => {
    const[open,setOpen]= useState(false);
    const openDialog=()=>{
        setOpen(true)
    }
  return (
    <Wrapper>
        <LoginButton variant='contained' onClick={()=> openDialog()} >Login</LoginButton>

        <Typography style={{marginTop:3,width:135}}>Become a seller</Typography>
        <Typography>More</Typography>

        <Container>
        <ShoppingCartIcon/>
            <Typography> 
                Cart
            </Typography>
        </Container>
        <LoginDialog open={open} onClose={setOpen}/>

    </Wrapper>
  )
}

export default CustomButton