import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import Button from '@mui/material/Button';
import { StyledEngineProvider } from '@mui/material';
import './App.scss'
import BarChart from './BarChart.tsx'
import ThreeDLine from './Components/Models/ThreeDLine.tsx'
import DiscreteSlider from './Components/Models/Slider.tsx';
import Main from './Components/Main.tsx';
import Graph from './Components/Graph.tsx';

const App = () => {
  return ( 
    <StyledEngineProvider injectFirst>
    <Routes>
      <Route path='/main' element={<Main />} />
      <Route path='/graph' element={<Graph />} />
    </Routes>
      <h2>hello</h2>
      <Button variant-="contained" className="btn-1" href='graph'>Go to graph</Button>
      <Button variant-="contained" className="btn-1" href='/main'>Go to main</Button>
    </StyledEngineProvider>
  )
}

export default App
