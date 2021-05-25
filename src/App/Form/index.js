import React, { useState } from "react";
import { Result } from "./Result";
import { Timer } from "./Timer";
import {
  Wrapper,
  Header,
  Label,
  LabelText,
  Input,
  Button,
  Loading,
  Failure,
  Info,
} from "./styled";
import { useRatesData } from "./useRatesData";

export const Form = () => {
  const [result, setResult] = useState();
  const ratesData = useRatesData();

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency];

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };

  const [currency, setCurrency] = useState("PLN");
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <Wrapper onSubmit={onSubmit}>
      <Timer />
      <Header> Przelicznik walut </Header>
      {ratesData.state === "loading" ? (
        <Loading>
          Sekundka... <br />
          Ładuję kursy walut z Europejskiego Banku Centralnego
        </Loading>
      ) : ratesData.state === "error" ? (
        <Failure>
          Przepraszamy, coś poszło nie tak. <br />
          Spróbuj ponownie później.
        </Failure>
      ) : (
        <>
          <Label>
            <LabelText> Chcę wymienić: </LabelText>
            <Input
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              type="number"
              step="0.01"
              placeholder="kwota w pln"
            />
          </Label>
          <Label>
            <LabelText>Chcę otrzymać:</LabelText>
            <Input
              as="select"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {Object.keys(ratesData.rates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </Input>
          </Label>
          <Button>Przelicz</Button>
          <Result result={result} />
        </>
      )}
      <Info>Kursy walut pobierane są z Europejskiego Banku Centralnego.</Info>
    </Wrapper>
  );
};
