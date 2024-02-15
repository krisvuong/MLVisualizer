import Plot from 'react-plotly.js';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { someData, someLineData, dotProductData } from '../../Functions/FunctionData';

interface lineParams {
  "x": String[];
  "y": String[];
  "z": String[];
};


const ThreeDLine = (props={xs: Array<String>, ys: Array<String>, zs: Array<String>, p: Number, whist: Array<any>}) => {
  // console.log(props.whist[0])
  // console.log(typeof(props.whist[0]))

  var trace1 = 
    {
      type: 'scatter3d',
      mode: 'lines+markers',
      x: props.whist.map(d => d[0]),
      y: props.whist.map(d => d[1]),
      z: props.whist.map(d => 0),
      line: {
        width: 6,
        color: props.xs,
        colorscale: "Viridis"},
      marker: {
        size: 2,
        color: props.xs,
        colorscale: "Greens",
        cmin: -20,
        cmax: 50
      }}

  return (
    <>
      <Plot
          data={[dotProductData, trace1]}
          layout={ {width: 600, height: 600, title: 'Dot Product Function'} }
      />
    </>
  );
};

export default ThreeDLine;