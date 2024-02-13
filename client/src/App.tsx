import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import { StyledEngineProvider } from '@mui/material';
import './App.scss'
import BarChart from './BarChart.tsx'
import ThreeDLine from './Models/ThreeDLine'
import DiscreteSlider from './Models/Slider.tsx';

function App() {

  // stuff for fetching from flask server
  const [data, setData] = useState([{}])

  // fetch data on first render
  useEffect(() => {
    fetch("http://127.0.0.1:5000/members")
      .then(res => res.json())
      .then(data => {
        setData(data)
        console.log(data)
      }
      )
  }, [])
 
  return ( 
    <StyledEngineProvider injectFirst>
      <h2>hello</h2>
      <ThreeDLine />
      <DiscreteSlider />
      <Button variant-="contained" className="btn-1">Hello</Button>
      {/* <BarChart data={[{label:'a', value:1}]}/> */}
      {/* {(typeof data.members === 'undefined')
          ? <p>Loading...</p>
          : data.members.map((member, i) => (
              <p key={i}>{member}</p>
            ))
      } */}
    </StyledEngineProvider>
  )
}

export default App
