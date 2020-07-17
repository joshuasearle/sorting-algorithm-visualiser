import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import FormLabel from '../../inputs/FormLabel/FormLabel';
import NumberInput from '../../inputs/NumberInput/NumberInput';
import * as actionCreators from '../../../store/actionCreators';

const ElementCountPicker = () => {
  let elementCount = useSelector((state) => state.currentList.length);
  elementCount = elementCount === 0 ? '' : elementCount;
  const dispatch = useDispatch();

  const elementCountChangeHandler = (event) => {
    dispatch(actionCreators.generateList(event.target.value));
  };

  return (
    <div>
      <FormLabel>Element Count</FormLabel>
      <NumberInput value={elementCount} onChange={elementCountChangeHandler} />
    </div>
  );
};

export default ElementCountPicker;
