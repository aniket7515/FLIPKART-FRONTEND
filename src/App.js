
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { InputBase,Box,styled } from '@mui/material'
import DataProvider from './components/context/DataProvider';

function App() {
  return (
    <DataProvider >
      <Header/>
      <Box style={{marginTop:"54px"}}>
          <Home/>
      </Box>
      
    </DataProvider>
  );
}

export default App;
