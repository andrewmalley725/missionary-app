import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { data } from './mock';

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
  const [links, setLinks] = useState([]);
  const [display, setDisplay] = useState(false);

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
    getColor(newValue);
    setDisplay(false);
  };

  const getColor = (value) => {
    const col = marks.filter((mark) => {
      return mark.value === value;
    });
    setColor(col[0].color);
  };

  const handleClick = () => {
    const newData = data.filter(record => record.color === color);
    setLinks(newData);
    setDisplay(true);
  }

  console.log(sliderValue);
  console.log(color);
  console.log(links);

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
      <button onClick={handleClick}>Show resources</button>
      <div style={{display: display ? 'block' : 'none'}}>
          <p>hello</p>
      </div>
    </div>
  );
}

export default App;
