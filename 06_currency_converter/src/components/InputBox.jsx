import React, { useCallback, useId } from "react";
import PropTypes from 'react';

function InputBox({
  label,
  amount,
  placeholder,
  onAmountChange = () => {},
  onCurrencyChange = () => {},
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  //Memoized event handlers to prevent unnecessary re-renders
  const handleAmountChange = useCallback(
    (e) => onAmountChange(Number(e.target.value)),
    [onAmountChange]
)
  const handleCurrencyChange = useCallback(
    (e) => onCurrencyChange(e.target.value),
    [onCurrencyChange]
  )

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder={placeholder}
          disabled={amountDisable}
          value={amount || ""}
          onChange={handleAmountChange || 0}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={handleCurrencyChange}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

//PropTypes for validation
InputBox.PropTypes = {
  lable: PropTypes.string,
  amount: PropTypes.number,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
  currencyOptions: PropTypes.array,
  selectCurrency: PropTypes.string,
  amountDisable: PropTypes.bool,
  currencyDisable: PropTypes.bool,
  className: PropTypes.string,
}

export default InputBox;
