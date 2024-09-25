import React from 'react';

const CalculatorButton = ({ onClick, name}) => {
  return (
    <button className='calculator-button' onClick={onClick}>
      {name}
    </button>
  );
};

export default CalculatorButton;
