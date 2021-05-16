import React from "react";
import { ResultText } from "./styled";

export const Result = ({ result }) => (
  <ResultText>
    {result !== undefined && (
      <>
        {result.sourceAmount} PLN = {result.targetAmount.toFixed(2)}{" "}
        {result.currency}
      </>
    )}
  </ResultText>
);
