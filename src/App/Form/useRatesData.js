import { useEffect, useState } from "react";
import axios from "axios";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({ state: "loading" });

  useEffect(() => {
    const axiosRates = async () => {
      try {
        const response = await axios.get(
          "http://api.exchangeratesapi.io/v1/latest?access_key=ea420e06e15e7fa7abedcf71669c183e"
        );

        const { rates, date } = await response.data;

        setRatesData({
          state: "success",
          rates,
          date,
        });
      } catch {
        setRatesData({
          state: "error",
        });
      }
    };

    setTimeout(axiosRates, 1000);
  }, []);

  return ratesData;
};
