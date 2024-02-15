import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MuiInput from '@mui/material/Input';

function valuetext(value: number) {
  return `${value}°C`;
}

const Input = styled(MuiInput)`
  width: 42px;
`;

const SliderWithLabel = (params: any) => {
  const [value, setValue] = React.useState(1);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
    params.handleDisplay(newValue as number)
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === '' ? 0 : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > params.max) {
      setValue(params.max);
    }
  };

  return (
    <Box sx={{ width: 250 }}>
      <Typography id="input-slider" gutterBottom>
        {params.name}:
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <p>α</p>
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            step={params.step}
            min={params.min}
            max={params.max}
          />
        </Grid>
        <Grid item>
          <Input
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: params.step,
              min: params.min,
              max: params.max,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};


// export default DiscreteSlider;
export default SliderWithLabel;