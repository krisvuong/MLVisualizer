import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import Button from '@mui/material/Button';
import { StyledEngineProvider } from '@mui/material';
import BarChart from '../BarChart.tsx'
import ThreeDLine from './Models/ThreeDLine.tsx'
import DiscreteSlider from './Models/Slider.tsx';
import Main from './Main.tsx';

const Graph = () => {

  // const routeResult = useRoutes(routes);

  // stuff for fetching from flask server
  // const [data, setData] = useState([{}])

  // fetch data on first render
  // useEffect(() => {
  //   fetch("http://127.0.0.1:5000/members")
  //     .then(res => res.json())
  //     .then(data => {
  //       setData(data)
  //       console.log(data)
  //     }
  //     )
  // }, [])
 
  return (
    <>
      <ThreeDLine />
      <DiscreteSlider />
    </>
  )
}

export default Graph;
