import React, { useState, useEffect } from "react";
import "./style.css";

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
    <p className="timer">
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
    </p>
  );
};
