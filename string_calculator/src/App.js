import React, { useState } from "react";
import "./App.css";
import CalculatorInput from "./components/input";
import CalculatorButton from "./components/button";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    setResult(input);
  };

  return (
    <div className="App-header">
      <div className="calculator-container">
        <CalculatorInput
          input={input}
          onInputChange={(e) => setInput(e.target.value)}
        />
        <CalculatorButton onClick={handleCalculate} name="Calculate" />
        <CalculatorButton
          onClick={() => {
            setInput("");
            setResult(null);
          }}
          name="Clear"
        />
      </div>
      <p className="result">{result}</p>
    </div>
  );
}

export default App;
