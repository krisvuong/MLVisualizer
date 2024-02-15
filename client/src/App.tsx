import { StyledEngineProvider } from '@mui/material';
import './App.scss'
import DotProduct from './Components/Models/DotProduct.tsx';

const App = () => {
  return ( 
    <StyledEngineProvider injectFirst>
      <DotProduct />
    {/* <Routes>
      <Route path='/main' element={<Home />} />
      <Route path='/graph' element={<Graph />} />
    </Routes>
    <Button variant-="contained" className="btn-1" href='graph'>Go to graph</Button> */}
    </StyledEngineProvider>
  )
}

export default App
