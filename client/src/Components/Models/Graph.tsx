import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Slider, StyledEngineProvider } from '@mui/material';
import BarChart from './BarChart.tsx'
import ThreeDLine from './ThreeDLine.tsx'
import SliderWithLabel from './Slider.tsx';
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
  
  const [wHist, setWHist] = useState([])
  const [param, setParam] = useState(1)
  const [startW, setStartW] = useState([1,1])
  const [alpha, setAlpha] = useState(1)
  const [maxIts, setMaxIts] = useState(1)


  let options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json;charset=utf-8'},
    body: JSON.stringify({alpha, maxIts})
  }

  let fetchPath = fetch("http://127.0.0.1:5000/getpath", options);

  // fetch data on first render + when graph parameters change
  useEffect(() => {
    fetchPath
      .then(d => d.json())
      .catch(e => {console.log("caught error:", e)})
      .then(d => {setWHist(d['w_history'])})
  }, [alpha, maxIts])


  return (
    <>
      <p>w0 = {"("+startW[0]+", "+startW[1]+")"}</p>
      <p>α = {alpha}</p>
      <p>max_its = {maxIts}</p>
      <Button onClick={() => setParam(param+1)}>increment</Button>
      <SliderWithLabel handleDisplay={(a:Number) => setAlpha(a)} name={"Alpha"} step={0.01} min={0.01} max={3}/>
      <SliderWithLabel handleDisplay={(i:Number) => setMaxIts(i)} name={"Max iterations"} step={1} min={1} max={20}/>
      <ThreeDLine xs={someLineData.x} ys={someLineData.y} zs={someLineData.z} p={param} whist={wHist}/>
    </>
  )
}

export default Graph;
