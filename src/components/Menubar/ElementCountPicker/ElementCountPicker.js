import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import FormLabel from '../../inputs/FormLabel/FormLabel';
import Slider from '../../inputs/Slider/Slider';
import * as actionCreators from '../../../store/actionCreators';

const ElementCountPicker = () => {
  let [elementCount, visualising] = useSelector((state) => [
    state.currentList.length,
    state.visualising,
  ]);
  elementCount = elementCount === 0 ? '' : elementCount;
  const dispatch = useDispatch();

  const elementCountChangeHandler = (event) => {
    dispatch(actionCreators.stopVisualisation());
    dispatch(actionCreators.generateList(event.target.value));
  };

  return (
    <div>
      <FormLabel>Element Count</FormLabel>
      <Slider
        disabled={visualising}
        value={elementCount}
        min={1}
        max={200}
        onChange={elementCountChangeHandler}
      />
    </div>
  );
};

export default ElementCountPicker;
