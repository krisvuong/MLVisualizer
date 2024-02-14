import Plot from 'react-plotly.js';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { someData, someLineData } from '../../Functions/FunctionData';

interface lineParams {
  "x": String[];
  "y": String[];
  "z": String[];
};

const ThreeDLine = (props={xs: Array<String>, ys: Array<String>, zs: Array<String>}) => {

  console.log(props.xs, props.ys, props.zs)

  // var i, r;

  // var x = [];
  // var y = [];
  // var z = [];
  // var c = [];

  // for(i = 0; i < 15; i++) 
  // {
  //   r = 10 * Math.cos(i / 10);
  //   x.push(i);
  //   y.push(15-i);
  //   z.push((Math.cos(r)+2)*50);
  //   c.push(i)
  // }

  var trace1 = 
    {
      type: 'scatter3d',
      mode: 'lines+markers',
      x: props.xs,
      y: props.ys,
      z: props.zs,
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
          data={[someData, trace1]}
          layout={ {width: 600, height: 600, title: 'A Fancy Plot'} }
      />
    </>
  );
};

export default ThreeDLine;