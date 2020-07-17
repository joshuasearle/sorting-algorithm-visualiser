import React from 'react';

const DropdownMenu = ({ options }) => {
  const dropDownOptions = options.map((option) => <option>{option}</option>);
  return <select>{dropDownOptions}</select>;
};

export default DropdownMenu;
