import Plot from 'react-plotly.js';
import { useState } from 'react';
import Button from '@mui/material/Button';

const ThreeDLine = () => {

  const [int, setInt] = useState(1)

  var pointCount = 31;
  var i, r;

  var x = [];
  var y = [];
  var z = [];
  var c = [];

  for(i = 0; i < pointCount; i++) 
  {
    r = int + 10 * Math.cos(i / 10);
    x.push(r * Math.cos(i));
    y.push(r * Math.sin(i) + int);
    z.push(i);
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
        size: 3.5,
        color: c,
        colorscale: "Greens",
        cmin: -20,
        cmax: 50
      }}

  var trace2 = 
    {
      type: 'scatter3d',
      mode: 'lines+markers',
      x: x.map(xval => xval*1.63 + 5),
      y: y.map(yval => yval*1.4 - 1),
      z: x.map(zval => (zval)),
      line: {
        width: 6,
        color: c,
        colorscale: "Viridis"},
      marker: {
        size: 3.5,
        color: c,
        colorscale: "Greens",
        cmin: -20,
        cmax: 50
      }}

  return (
    <>
      <Button onClick={() => setInt(int+1)}>Click me</Button>
      <Plot
          data={[trace1, trace2]}
          layout={ {width: 600, height: 600, title: 'A Fancy Plot'} }
      />
    </>
  );
};

export default ThreeDLine;