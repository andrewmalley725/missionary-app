import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { data } from './data';
import Button from '@mui/material/Button';
import red from './red.webp';
import green from './green.webp';
import yellow from './yellow.webp';
import orange from './orange.webp'

const marks = [
  {
    value: 0,
    label: 'Red',
    color: 'red',
    img: red
  },
  {
    value: 33,
    label: 'Orange',
    color: 'orange',
    img: orange
  },
  {
    value: 66,
    label: 'Yellow',
    color: 'yellow',
    img: yellow
  },
  {
    value: 100,
    label: 'Green',
    color: 'green',
    img: green
  },
];

const theme = {
  primaryColor: '#004080', // Navy Blue
  secondaryColor: '#F5F5F5', // Grayish background
  accentColor: '#FFCC00', // Gold
};

function App() {
  const [sliderValue, setSliderValue] = useState(0);
  const [color, setColor] = useState('red');
  const [links, setLinks] = useState(data.filter((record) => record.color === color));

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
    const col = marks.filter((mark) => {
      return mark.value === newValue;
    });
    setColor(col[0].color);
    setLinks(data.filter((record) => record.color === col[0].color));
  };


  console.log(color);
  console.log(sliderValue);
  console.log(links);

  return (
    <div style={{ textAlign: 'center', padding: '20px', color: theme.primaryColor }}>
      <h1>Missionary Wellness App</h1>
      <h2>How are you feeling today?</h2>
      <Box sx={{ width: 800, height: 350, margin: '0 auto', backgroundColor: 'rgba(169,169,169,0.3)', padding: '90px', borderRadius: '8px' }}>
        <Slider
          aria-label="Restricted values"
          value={sliderValue}
          onChange={handleChange}
          step={null}
          marks={marks.map((mark) => ({
            ...mark,
            label: (
              <div>
                <span style={{ color: mark.color }}>
                  <b>{mark.label}</b>
                </span>
                <br/>
                <img
                  src={mark.img}
                  alt={mark.color}
                  style={{ width: '150px', height: '300px' }}
                />
              </div>
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
      
      <div style={{  marginTop: '20px' }}>
        <h3>Here are some helpful resources for {color}:</h3>
        
        {links.map((link, index) => (
          <div><a key={index} href={link.link} target="_blank">{link.blurb}</a></div>
        ))}
        
      </div>
    </div>
  );
}

export default App;
