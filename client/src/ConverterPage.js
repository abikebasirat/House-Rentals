import React, { useState, useEffect } from "react";
// import "./styles.css";

function ConverterPage({tittleFrom, titleTo}) {
  const [rates, setRates] = useState();
  const [ratesFetched, setRatesFetched] = useState(false);
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [output, setOutput] = useState();

  const getRates = async () => {
    // fetch the data from API
    const API_KEY =import.meta.env.VITE_API_KEY
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`
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
      `https://v6.exchangerate-api.com/v6/59d560835c4e8d4f996adc83/latest/${fromCurrency}`
    ).then((response) => response.json());
    const fetchedRates = response.conversion_rates;
    const CurrencyRate = fetchedRates[toCurrency];
    const output = amount * CurrencyRate;
    setOutput(output);
  };

  return (
    <div className="container">
      <div className="input-amount">
        <label>Amount:</label>
        <input
          type="number"
          id="amount"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
      </div>

      <div className="input-from">
        <label>From:</label>
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
        <label>To:</label>
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
        <label>Output: {output}</label>
      </div>
    </div>
  );
}

export default ConverterPage;


// import React, { useEffect, useState } from 'react'
// // import { TbArrowsExchange } from "react-icons/tb";
// // import "../styles/converter.scss"
// // import "../styles/Converter.scss"
// import CurrencySelect from './CurrencySelect';

// const ConverterPage = () => {
//   const [amount, setAmount] = useState(100);
//   const [fromCurrency, setFromCurrency] = useState("USD");
//   const [toCurrency, setToCurrency] = useState("INR");
//   const [result, setResult] = useState("");
//   const [isLoading, setIsLoading] = useState(false);


//   // swap the values of fromCurrency and toCurrency
//   const handleSwapCurrencies = () => {
//     setFromCurrency(toCurrency);
//     setToCurrency(fromCurrency);
//   }

//   const API_KEY = import.meta.env.VITE_API_KEY
//   const getExchangeRate = async () => {
//     const API_URL =
//     `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`
//     //  `https://v6.exchangerate-api.com/v6/${API_KEY}
//     //                   /pair/${fromCurrency}/${toCurrency}`;

//  console.log(API_KEY)
//     setIsLoading(true);
//     try {
//       const response = await fetch(API_URL);
//       if(!response.ok) throw Error("Something went wrong!");

//       const data = await response.json();
//       const rate = (data.conversion_rate * amount). toFixed(2);
//       setResult(`${amount}  = ${rate} `)
//      console.log(data)
//     } catch (error) {

//       console.log(error);
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     getExchangeRate();
//   }
//   // fetch exchange rate on initial render
//   useEffect(() => {
//     getExchangeRate
//   }, []);

  

//   return (
//     <div className='currency-conveter' >
//       <h2 className='converter-title'>Currency Conveter</h2>
//       <form onSubmit={handleFormSubmit} className='converter-form'>
//         <div className='form-group'>
//             <label className='form-label'>Enter Amount</label>
//             <input type="number" className='form-input' value={amount} 
//              onChange={(e) => setAmount(e.target.value)}required />

//             <div className='form-group form-currency-group'>
//                 <div className='form-section'>
//                     <label className="form-label">From</label>
//                    <CurrencySelect  
//                      selectedCurrency={fromCurrency} 
//                      handleCurrency={e => setFromCurrency(e.target.value)}  
//                      /> 
//                  </div> 
//                  <div className='swap-icon' onClick={handleSwapCurrencies}> 
//                 {/* <TbArrowsExchange /> */}
//                 </div>

//                 <div className='form-section'>
//                     <label className="form-label">TO</label>
//                     <CurrencySelect
//                      selectedCurrency={toCurrency}
//                      handleCurrency={e => setToCurrency(e.target.value)} 
//                     />
                   
//                 </div>
//             </div>
//         </div>
//                     <button type='submit' className={`${isLoading  ? "loading" : ""}
//                     submit-button`}>Get Exchange Rate</button>
//                     <p className='exchange-rate-result'>
//                       {/* 1,000 USD = 83620.80 INR */}
//                       {isLoading ? "Getting exchange rate..." : result}
//                       </p> 
//       </form>
//     </div>
//   )
// }

// export default ConverterPage





