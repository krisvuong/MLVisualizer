import { StyledEngineProvider, Button } from '@mui/material';
import './App.scss'
import DotProduct from './Components/Models/DotProduct.tsx';
import Link from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return ( 
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <Routes>
          <Route path="/dot-product" element={<DotProduct />} />
        </Routes>
      </BrowserRouter>
      <Button variant="outlined" href="/dot-product">To dot product</Button>
      {/* <DotProduct /> */}
    </StyledEngineProvider>
  )
}

export default App
