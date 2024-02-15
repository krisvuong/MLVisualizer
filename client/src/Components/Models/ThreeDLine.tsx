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

  console.log(props.whist)

  var trace1 = 
    {
      type: 'scatter3d',
      mode: 'lines+markers',
      x: props.xs,
      y: props.ys,
      z: props.zs.map(z => (Number(z) * Number(props.p)).toString()),
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
          layout={ {width: 600, height: 600, title: 'A Fancy Plot'} }
      />
    </>
  );
};

export default ThreeDLine;