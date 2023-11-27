import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { data } from './mock';
import Button from '@mui/material/Button';

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

const theme = {
  primaryColor: '#004080', // Navy Blue
  secondaryColor: '#F5F5F5', // Grayish background
  accentColor: '#FFCC00', // Gold
};

const buttonStyle = {
  backgroundColor: theme.primaryColor,
  color: theme.secondaryColor,
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  margin: '10px 0',
};

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
    const newData = data.filter((record) => record.color === color);
    setLinks(newData);
    setDisplay(true);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', color: theme.primaryColor }}>
      <h1>Missionary Wellness App</h1>
      <h2>How are you feeling today?</h2>
      <Box sx={{ width: 300, margin: '0 auto', backgroundColor: 'rgba(169,169,169,0.3)', padding: '20px', borderRadius: '8px' }}>
        <Slider
          aria-label="Restricted values"
          value={sliderValue}
          onChange={handleChange}
          step={null}
          marks={marks.map((mark) => ({
            ...mark,
            label: (
              <span style={{ color: mark.color }}>
                {mark.label}
              </span>
            ),
          }))}
          sx={{
            '& .MuiSlider-rail': {
              backgroundColor: 'lightgray',
            },
            '& .MuiSlider-track': {
              backgroundColor: color,
            },
          }}
        />
      </Box>
      <Button variant="contained" style={buttonStyle} onClick={handleClick}>
        Show resources
      </Button>
      <div style={{ display: display ? 'block' : 'none', marginTop: '20px' }}>
        {links.map((link, index) => (
          <p key={index}>{link.link}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
