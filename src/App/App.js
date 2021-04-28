import React, { useState } from "react";
import "./App.css";
import { Form } from "./Form";
import { Info } from "./Info";
import { currencies } from "./currencies";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (amount, currency) => {
    const rate = currencies.find(({ short }) => short === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  return (
    <div className="App">
      <Form calculateResult={calculateResult} result={result} />
      <Info />
    </div>
  );
}

export default App;