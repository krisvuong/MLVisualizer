import { useState, useEffect } from 'react'
import GraphWithDescent from './GraphWithDescent.tsx'
import SliderWithLabel from '../Slider.tsx';
import { someLineData } from '../../Functions/FunctionData.tsx';

const DotProduct = () => {

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
  const [w0, setW0] = useState([10,10])
  const [alpha, setAlpha] = useState(1)
  const [maxIts, setMaxIts] = useState(1)

  let options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json;charset=utf-8'},
    body: JSON.stringify({"function":"dotProduct", alpha, maxIts})
  }

  let fetchPath = fetch("http://127.0.0.1:5000/getpath", options);

  // re-fetch data when graph parameters change
  useEffect(() => {
    fetchPath
      .then(d => d.json())
      .catch(e => {console.log("caught error:", e)})
      .then(d => {setWHist(d['w_history'])})
      .catch(e => {console.log("caught error:", e)})
  }, [alpha, maxIts])


  return (
    <>
      <p>w0 = {"("+w0[0]+", "+w0[1]+")"}</p>
      <p>α = {alpha}</p>
      <p>max_its = {maxIts}</p>
      <SliderWithLabel handleDisplay={(a:Number) => setAlpha(a)} name={"Alpha"} step={0.01} min={0.01} max={1}/>
      <SliderWithLabel handleDisplay={(i:Number) => setMaxIts(i)} name={"Max iterations"} step={1} min={1} max={20}/>
      <GraphWithDescent xs={someLineData.x} ys={someLineData.y} zs={someLineData.z} p={param} whist={wHist}/>
    </>
  )
}

export default DotProduct;
