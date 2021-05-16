import React, { useState } from "react";
import { Wrapper } from "./styled";
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
    <Wrapper>
      <Form calculateResult={calculateResult} result={result} />
      <Info />
    </Wrapper>
  );
}

export default App;
