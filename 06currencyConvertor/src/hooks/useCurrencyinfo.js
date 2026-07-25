import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchCurrencies() {
      try {
        const response = await fetch(
          `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch currency data");
        }

        const result = await response.json();
        setData(result[currency]);
      } catch (err) {
        console.error(err);
      }
    }

    fetchCurrencies();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;