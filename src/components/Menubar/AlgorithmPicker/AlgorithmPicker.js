import React from 'react';

import DropdownMenu from '../../inputs/DropdownMenu/DropdownMenu';
import FormLabel from '../../inputs/FormLabel/FormLabel';

const AlgorithmPicker = () => {
  const options = ['selection-sort', 'insertion-sort'];

  return (
    <div>
      <FormLabel>Algorithms</FormLabel>
      <DropdownMenu options={options} />
    </div>
  );
};

export default AlgorithmPicker;
