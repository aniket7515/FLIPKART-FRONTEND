import React,{useState} from 'react'
import {Box,Button,Typography,styled,Menu,MenuItem} from '@mui/material'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
const Component =styled(Menu)`
    margin-top: 5px;
`
const Logout= styled(Typography)`
    font-size:14px;
    margin-left:20px;
`



const Profile = ({account,setAccount}) => {
    const [open,setOpen]= useState(false)
    const handleClick=(event)=>{
        setOpen(event.currentTarget)
    }
    const handleClose=()=>{
        setOpen(false)
    }
    const LogoutUser=()=>{
        setAccount('')
    }
  return (
    <>
        <Box onClick={handleClick}> <Typography style={{marginTop:2, cursor:'pointer'}} >{account}</Typography> </Box>

        <Component
        
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        
      >
        <MenuItem onClick={()=>{handleClose(); LogoutUser();}}>
            <PowerSettingsNewIcon size="small"/>
            <Logout>Logout</Logout>
        </MenuItem>
        
      </Component>

    </>
  )
}

export default Profile