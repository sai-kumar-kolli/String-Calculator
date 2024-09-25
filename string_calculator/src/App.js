import React, { useEffect, useState } from "react";
import "./App.css";
import CalculatorInput from "./components/input";
import CalculatorButton from "./components/button";
import { add } from "./utilis/addUtili";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (error) {
      setResult(null);
    }
  }, []);

  const handleCalculate = () => {
    try {
      let sum = add(input);
      setResult(sum);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="App-header">
      <h1>Srting Calculator</h1>
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
            setError("");
          }}
          name="Clear"
        />
      </div>
      {error && <p className="error">{error}</p>}
      <p className="result">{result}</p>
    </div>
  );
}

export default App;
