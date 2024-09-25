import React, { useEffect, useState } from "react";
import "./App.css";
import CalculatorInput from "./components/input";
import CalculatorButton from "./components/button";
import { add } from "./utilis/addUtili";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (error) {
      toast.error(error, {
        onClose: () => setError(""),
      });
      setResult(null);
    }
  }, [error]);

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
      <p className="result">{result}</p>
      <ToastContainer />
    </div>
  );
}

export default App;
