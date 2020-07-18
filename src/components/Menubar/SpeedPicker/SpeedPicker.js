import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import FormLabel from '../../inputs/FormLabel/FormLabel';
import Slider from '../../inputs/Slider/Slider';
import * as actionCreators from '../../../store/actionCreators';

const ElementCountPicker = () => {
  let interval = 1000 - useSelector((state) => state.interval);
  const dispatch = useDispatch();

  const intervalChangeHandler = (event) => {
    dispatch(actionCreators.setInterval(1000 - event.target.value));
  };

  return (
    <div>
      <FormLabel>Speed</FormLabel>
      <Slider
        min='1'
        max='1000'
        value={interval}
        onChange={intervalChangeHandler}
      />
    </div>
  );
};

export default ElementCountPicker;
