import React from 'react'
import { InputBase,Box,styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchInput= styled(Box)`
    background-color:#fff;
    width:38%;
    border-radius:2px;
    margin-left:15px;
    display:flex;
    margin-right:15px;
 
`
const InputBaseHandler=styled(InputBase)`
    padding-left:20px;
    width:100%;

`
const SearchIconWrapper=styled(Box)`
    color:#2874f0;
    padding:5px;
    display:flex;

`

const Search = () => {
  return (
   
        <SearchInput>
            <InputBaseHandler placeholder='Search for products,brands and more!'/>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
        </SearchInput>
        

  )
}

export default Search