
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { InputBase,Box,styled } from '@mui/material'

function App() {
  return (
    <div >
      <Header/>
      <Box style={{marginTop:"54px"}}>
          <Home/>
      </Box>
      
    </div>
  );
}

export default App;
