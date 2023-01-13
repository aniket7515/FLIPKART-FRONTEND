import React, { useState } from 'react'
import { Dialog, Box, TextField, Typography, Button, styled } from '@mui/material'


const Component = styled(Box)`
    height: 70vh;
    width: 90vh;
`
const Image = styled(Box)`
    background :#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height:85%;
    width:30%;
    padding:45px 35px;
`
const Wrapper= styled(Box)`
    display:flex;
    flex-direction:column;
    padding:25px 35px;
    flex:1;
    &> div, & > button, &>p{
        margin-top:20px;
    }
`
const LoginButton= styled(Button)`
    text-transform:none;
    background:#FB641B;
    color:#fff;
    height:48px;
    border-radius:2px;
`
const RequestOTP= styled(Button)`
    text-transform:none;
    background:#fff;
    color:#2874f0;
    height:48px;
    border-radius:2px;
    box-shadow:0 2px 4px 0 rgb(0 0 0/20%);
`
const Text= styled(Typography)`
    font-size:12px;
    color:#878787;
`
const CreateAccount=styled(Typography)`
    font-size:14px;
    text-align:center;
    color:#2874f0;
    font-weight:600;
    cursor:pointer;
`

const accountInitialValue={
    login:{
        view:'login',
        heading:'Login',
        subHeading:'Get access to your Orders, Wishlist and Recommendations'
    },
    signup:{
        view:'signup',
        heading:"Looks like you're now here",
        subHeading:"Sign Up here"
    }
}


const LoginDialog = ({ open, onClose }) => {
    const[account,toggleAccount]=useState(accountInitialValue.login)
    const handleClose = () => {
        onClose(false);
        toggleAccount(accountInitialValue.login)
    }
    const toggleSignup=()=>{
        toggleAccount(accountInitialValue.signup)
    }

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:'unset'}}}>
            <Component>
                <Box style={{display:"flex",height:"100%"}}>
                    <Image>
                        <Typography  variant="h5" style={{color:"#fff",fontWeight:"bold"}}>{account.heading}</Typography>
                        <Typography style={{marginTop:"20px",color:"#fff",fontWeight:"bold"}}>{account.subHeading}</Typography>
                    </Image>


                    {account.view==='login' ?
                    <Wrapper>
                        <TextField variant="standard" label="Enter Email/Mobile number" />
                        <TextField variant="standard" label="Enter Password" />
                        <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                        <LoginButton>Login</LoginButton>
                        <Typography style={{textAlign:'center'}} >OR</Typography>
                        <RequestOTP>Request OTP</RequestOTP>
                        <CreateAccount onClick={toggleSignup}>New to Flipkart? create an account</CreateAccount>
                    </Wrapper>
                    :
                    <Wrapper>
                        <TextField variant="standard" label="Enter Firstname" />
                        <TextField variant="standard" label="Enter LastName" />
                        <TextField variant="standard" label="Enter Username" />
                        <TextField variant="standard" label="Enter Email" />
                        <TextField variant="standard" label="Enter Password" />
                        <TextField variant="standard" label="Enter Phone" />
                        
                        <LoginButton>Sign Up</LoginButton>
                        
                    </Wrapper>
                    }
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog