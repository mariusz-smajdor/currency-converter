import React from "react";

export const Result = ({ result }) => (
  <span>
    {result !== undefined && (
      <>
        {result.sourceAmount} PLN = {result.targetAmount.toFixed(2)}{" "}
        {result.currency}
      </>
    )}
  </span>
);
