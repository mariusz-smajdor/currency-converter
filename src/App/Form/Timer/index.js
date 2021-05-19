import React from "react";
import { Clock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const formatDate = (date) =>
  date.toLocaleString(undefined, {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "numeric",
    month: "long",
  });

export const Timer = () => {
  const date = useCurrentDate();

  return <Clock>Dzisiaj jest {formatDate(date)}</Clock>;
};
