import Plot from 'react-plotly.js';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { someData } from '../../Functions/FunctionData';

const ThreeDLine = () => {

  const [int, setInt] = useState(1)

  var pointCount = 31;
  var i, r;

  var x = [];
  var y = [];
  var z = [];
  var c = [];

  for(i = 0; i < 15; i++) 
  {
    r = int + 10 * Math.cos(i / 10);
    x.push(i);
    y.push(15-i);
    z.push((Math.cos(r)+2)*50);
    c.push(i)
  }

  var trace1 = 
    {
      type: 'scatter3d',
      mode: 'lines+markers',
      x: x,
      y: y,
      z: z,
      line: {
        width: 6,
        color: c,
        colorscale: "Viridis"},
      marker: {
        size: 2,
        color: c,
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