import React from 'react';

const Slider = ({ value, onChange, min, max, disabled }) => {
  return (
    <input
      min={min}
      max={max}
      value={value}
      onChange={onChange}
      type='range'
      disabled={disabled}
    />
  );
};

export default Slider;
