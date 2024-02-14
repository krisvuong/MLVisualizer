import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import Button from '@mui/material/Button';
import { StyledEngineProvider } from '@mui/material';
import BarChart from './BarChart.tsx'
import ThreeDLine from './ThreeDLine.tsx'
import DiscreteSlider from './Slider.tsx';
// import Home from '../Home.tsx';
import BananaFunc from './BananaFunc.tsx';
import { someLineData } from '../../Functions/FunctionData.tsx';

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

  const [param, setParam] = useState(1)

  const handleParamChange = (newVal: any) => {setParam(newVal)}
 
  return (
    <>
      {/* <Button variant-="contained" className="btn-1" href='/main'>Go to home</Button> */}
      {/* <BananaFunc /> */}
      <p>Param: {param}</p>
      <Button onClick={() => setParam(param+1)}>increment</Button>
      <DiscreteSlider setParam={(p) => setParam(p)} />
      <ThreeDLine xs={someLineData.x} ys={someLineData.y} zs={someLineData.z} p={param}/>
    </>
  )
}

export default Graph;
