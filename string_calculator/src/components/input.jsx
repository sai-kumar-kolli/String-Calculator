import React from 'react';

const CalculatorInput = ({ input, onInputChange }) => {
  return (
    <input
      type="text"
      placeholder="Enter numbers"
      value={input}
      onChange={(e) => onInputChange(e)}
      data-testid="calculator-input"
      className='calculator-input'
    />
  );
};

export default CalculatorInput;
