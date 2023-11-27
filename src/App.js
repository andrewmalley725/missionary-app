import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: 'Red',
    color: 'red',
  },
  {
    value: 33,
    label: 'Yellow',
    color: 'yellow',
  },
  {
    value: 66,
    label: 'Orange',
    color: 'orange',
  },
  {
    value: 100,
    label: 'Green',
    color: 'green',
  },
];

function App() {
  const [sliderValue, setSliderValue] = useState(0);
  const [color, setColor] = useState('');

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
    getColor(newValue);
  };

  const getColor = (value) => {
    const col = marks.filter((mark) => {
      return mark.value === value;
    });
    setColor(col[0].color);
  };

  console.log(sliderValue);
  console.log(color);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Missionary Wellness App</h1>
      <h2>How are you feeling today?</h2>
      <Box sx={{ width: 300, margin: '0 auto' }}>
        <Slider
          aria-label="Restricted values"
          value={sliderValue}
          onChange={handleChange}
          step={null}
          // valueLabelDisplay={null}
          marks={marks.map((mark) => ({
            ...mark,
            label: (
              <span style={{ color: mark.color }}>
                {mark.label}
              </span>
            ),
          }))}
          sx={{
            // Apply custom styling to change background color
            '& .MuiSlider-rail': {
              backgroundColor: 'lightgray',
            },
            '& .MuiSlider-track': {
              backgroundColor: color, // Use the color of the selected mark
            },
          }}
        />
      </Box>
    </div>
  );
}

export default App;
