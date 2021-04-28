import React, { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import "./style.css";

export const Form = ({ calculateResult, result }) => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].short);

  const onSubmit = (event) => {
    event.preventDefault();

    calculateResult(amount, currency);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h1 className="form__header">Przelicznik walut</h1>
      <label className="form__label">
        <span className="form__labelText">Chcę wymienić:</span>
        <input
          value={amount}
          onChange={({ target }) => setAmount(target.value)}
          className="form__field"
          type="number"
          step="0.01"
          placeholder="kwota w pln"
        />
      </label>
      <label className="form__label">
        <span className="form__labelText">Chcę otrzymać:</span>
        <select
          className="form__field"
          value={currency}
          onChange={({ target }) => setCurrency(target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency.short} value={currency.short}>
              {currency.name}
            </option>
          ))}
        </select>
      </label>
      <button className="form__submit">Przelicz</button>
      <p className="form__result">
        <Result result={result} />
      </p>
    </form>
  );
};
