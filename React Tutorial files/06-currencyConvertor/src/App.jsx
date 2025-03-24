import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {
  
  const[amount,setAmount] = useState(0)  //state for amount
  const[from, setFrom] = useState("usd")  
  const[to, setTo] = useState("inr")
  const[convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from) || {}
  const options = Object.keys(currencyInfo) //extract all the  from useCurrencyInfo and store it into options

  const swap = ()=> {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }


  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  
  return (
    <>
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://img.freepik.com/free-vector/digital-glowing-currency-sign-background-with-text-space_1017-52412.jpg?t=st=1742812249~exp=1742815849~hmac=b1192efb7355172fdf6b4cd86eae354ef26d2aa2f780055909339655e2f1b8f8&w=2000')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => {setAmount(amount)}}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button onClick={ swap }
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5" >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => {setTo(currency)}}
                            selectCurrency={from}
                            amountDisable //so that the user cannot change values of to
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
  </>
);
}

export default App
