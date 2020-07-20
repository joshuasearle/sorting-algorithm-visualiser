import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import FormLabel from '../../inputs/FormLabel/FormLabel';
import Slider from '../../inputs/Slider/Slider';
import * as actionCreators from '../../../store/actionCreators';

const ElementCountPicker = () => {
  let speed = useSelector((state) => state.interval);
  const dispatch = useDispatch();

  const intervalChangeHandler = (event) => {
    dispatch(actionCreators.setSpeed(event.target.value));
  };

  return (
    <div>
      <FormLabel>Speed</FormLabel>
      <Slider
        min='0'
        max='100'
        value={speed}
        onChange={intervalChangeHandler}
      />
    </div>
  );
};

export default ElementCountPicker;
