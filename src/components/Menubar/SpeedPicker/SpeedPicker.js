import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import FormLabel from '../../inputs/FormLabel/FormLabel';
import Slider from '../../inputs/Slider/Slider';
import * as actionCreators from '../../../store/actionCreators';

const ElementCountPicker = () => {
  let interval = 100 - useSelector((state) => state.interval);
  const dispatch = useDispatch();

  const intervalChangeHandler = (event) => {
    dispatch(actionCreators.setInterval(100 - event.target.value));
  };

  return (
    <div>
      <FormLabel>Speed</FormLabel>
      <Slider
        min='1'
        max='100'
        value={interval}
        onChange={intervalChangeHandler}
      />
    </div>
  );
};

export default ElementCountPicker;
