import React, { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { Timer } from "./Timer";
import { Wrapper, Header, Label, LabelText, Input, Button } from "./styled";

export const Form = ({ calculateResult, result }) => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].short);

  const onSubmit = (event) => {
    event.preventDefault();

    calculateResult(amount, currency);
  };

  return (
    <Wrapper onSubmit={onSubmit}>
      <Timer />
      <Header> Przelicznik walut </Header>
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
          {currencies.map((currency) => (
            <option key={currency.short} value={currency.short}>
              {currency.name}
            </option>
          ))}
        </Input>
      </Label>
      <Button>Przelicz</Button>
      <Result result={result} />
    </Wrapper>
  );
};
