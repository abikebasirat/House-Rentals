import React, { useState, useEffect } from "react";
// import "./convoter.css";
import  "./Converters.css";

function ConverterPage({currencyFrom, currencyTo}) {
  const [rates, setRates] = useState();
  const [ratesFetched, setRatesFetched] = useState(false);
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [output, setOutput] = useState();



  const getRates = async () => {
    // fetch the data from API

    const API_KEY = process.env.REACT_APP_CONVERTER_KEY 
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/2f478d4d368a9bfa73f2e0e4/latest/USD`
    ).then((response) => response.json());

    // save the rates in the state
    if (response.result === "success") {
      setRates(response.conversion_rates);
      setRatesFetched(true);
    }
  };
  
  useEffect(() => {
    getRates();
  }, []);

  const calculateOutput = async () => {
    // fetch the selected from currency rates
    const response = await fetch(
  `https://v6.exchangerate-api.com/v6/2f478d4d368a9bfa73f2e0e4/latest/${fromCurrency}`

    ).then((response) => response.json());
    const fetchedRates = response.conversion_rates;
    const CurrencyRate = fetchedRates[toCurrency];
    const output = amount * CurrencyRate;
    
    
    setOutput(output);
  };


  return (
    <div className="topic">
      <h2>Please convert your money here</h2>
    <div className="container">
      <div className="input-amount">
        <label className="coverter">Amount</label>
        <input
          type="number"
          id="amount"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
      </div>

      <div className="input-from">
        <label className="coverter">From</label>
        <select
          id="from"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {ratesFetched ? (
            Object.keys(rates).map((currency, index) => (
              <option key={index} value={currency}>
                {currency}
              </option>
            ))
          ) : (
            <option defaultValue>USD</option>
          )}
        </select>
      </div>

      <div className="input-to">
        <label className="coverter">To</label>
        <select
          id="to"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {ratesFetched ? (
            Object.keys(rates).map((currency, index) => (
              <option key={index} value={currency}>
                {currency}
              </option>
            ))
          ) : (
            <option defaultValue>EUR</option>
          )}
        </select>
      </div>
      <button className="btn" onClick={() => calculateOutput()}>
        Calculate
      </button>
      <div className="output">
        <label>Output {output}</label>
      </div>
    </div>
    </div>
    
  );
}

export default ConverterPage;






