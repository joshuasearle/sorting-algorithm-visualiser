import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import FormLabel from '../../inputs/FormLabel/FormLabel';
import NumberInput from '../../inputs/NumberInput/NumberInput';
import * as actionCreators from '../../../store/actionCreators';

const ElementCountPicker = () => {
  let interval = useSelector((state) => state.interval);
  const dispatch = useDispatch();

  const intervalChangeHandler = (event) => {
    dispatch(actionCreators.setInterval(event.target.value));
  };

  return (
    <div>
      <FormLabel>Interval (ms)</FormLabel>
      <NumberInput value={interval} onChange={intervalChangeHandler} />
    </div>
  );
};

export default ElementCountPicker;
