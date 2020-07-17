import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DropdownMenu from '../../inputs/DropdownMenu/DropdownMenu';
import FormLabel from '../../inputs/FormLabel/FormLabel';
import * as actionCreators from '../../../store/actionCreators';

const AlgorithmPicker = () => {
  const algorithm = useSelector((state) => state.algorithm);
  const dispatch = useDispatch();

  const algorithmChangeHandler = (event) => {
    dispatch(actionCreators.setAlgorithm(event.target.value));
  };

  const options = ['selection-sort', 'insertion-sort'];

  return (
    <div>
      <FormLabel>Algorithms</FormLabel>
      <DropdownMenu
        value={algorithm}
        options={options}
        onChange={algorithmChangeHandler}
      />
    </div>
  );
};

export default AlgorithmPicker;
