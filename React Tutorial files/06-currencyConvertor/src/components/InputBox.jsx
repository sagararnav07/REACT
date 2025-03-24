import React,{useId} from 'react'



  function InputBox({
      label, //so that we can find it is FROM or TO for i.e FROM usd TO inr
      amount,
      onAmountChange, 
      onCurrencyChange,
      currencyOptions = [],
      selectCurrency = "usd", //usd is default so that atleast 1 currency is there
      amountDisable = false,
      currencyDisable = false,
      className = "",
       }) {
     
      const amountInputId = useId()
      return (
         <>
         {/* Desiging the  label */}
          <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}/*here we have done css in an object because we are taking css from user in className and also passed classname as an object*/>
              <div className="w-1/2">
                  <label  htmlFor = {amountInputId} className="text-black/40 mb-2 inline-block">
                      {label}
                  </label>

                    {/* Desiging the  input amount */}
                  <input 
                      id = {amountInputId}
                      className="outline-none w-full bg-transparent py-1.5"
                      type="number"
                      placeholder="Amount"
                      disabled = {amountDisable} //passed to check if the amound is disabled
                      value={amount} //value is taken from amount
                      //Now if someone has changed the amount but the onChangeAmount function dues not have any value so we will add function by checking if value exist or not  or not
                      onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} //Don't forget to use Number method when the return value is a number as javascript by default return a string
                  />

                  {/* Designing the types of currency-types */}
              </div>
              <div className="w-1/2 flex flex-wrap justify-end text-right">
                  <p className="text-black/40 mb-2 w-full">Currency Type</p>
                     {/* Designing the types of currency-types you can select*/}
                  <select 
                      className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                      value = {selectCurrency/*what currency you have selected */} 
                      onChange = {(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                      disabled = {currencyDisable}>
                      
                      {/*Looping the options tage and NOTE: Whenever you loop in react always pass a key as it will enhance optimisation*/}
                          {currencyOptions.map((currency) => (

                                  <option key={currency} value={currency}>
                                        {currency}
                                  </option>
                                ))}
                         
                  
                  </select>
              </div>
          </div>
        </>
      );
  }
  
  export default InputBox;
  