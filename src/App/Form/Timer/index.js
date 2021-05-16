import React, { useState, useEffect } from "react";
import { Clock } from "./styled";

export const Timer = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <Clock>
      Dzisiaj jest{" "}
      {date.toLocaleTimeString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        second: "numeric",
        minute: "numeric",
        hour: "numeric",
      })}
    </Clock>
  );
};
