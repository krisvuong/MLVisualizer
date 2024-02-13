import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import Button from '@mui/material/Button';
import { StyledEngineProvider } from '@mui/material';
import './App.scss'
import BarChart from './Components/Models/BarChart.tsx'
import ThreeDLine from './Components/Models/ThreeDLine.tsx'
import DiscreteSlider from './Components/Models/Slider.tsx';
import Home from './Components/Home.tsx';
import Graph from './Components/Models/Graph.tsx';

const App = () => {
  return ( 
    <StyledEngineProvider injectFirst>
      <Graph />
    {/* <Routes>
      <Route path='/main' element={<Home />} />
      <Route path='/graph' element={<Graph />} />
    </Routes>
    <Button variant-="contained" className="btn-1" href='graph'>Go to graph</Button> */}
    </StyledEngineProvider>
  )
}

export default App
