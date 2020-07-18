import React from 'react';

const Slider = ({ value, onChange, min, max }) => {
  return (
    <input min={min} max={max} value={value} onChange={onChange} type='range' />
  );
};

export default Slider;
