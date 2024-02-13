import Plot from 'react-plotly.js';
import { useState } from 'react';
import Button from '@mui/material/Button';
import d3 from 'd3';
import { rosenbrockData } from '../../Functions/RosenbrockData';


const BananaFunc = () => {

    const [param, setParam] = useState(1)

    return (
      <>
        <Button onClick={() => setParam(param+1)}>Click me</Button>
        <Plot
            data={rosenbrockData}
            layout={ {width: 600, height: 600, title: 'A Fancy Plot'} }
            
        />
      </>
    );
};

export default BananaFunc;