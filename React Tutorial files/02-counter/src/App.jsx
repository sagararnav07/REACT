import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //syntax to use hook -> here we are using useState
  let [counter/*variable that store hook */, setCounter /*used to control counter*/] = useState(15)
  //When we use const here then :- Uncaught TypeError: Assignment to constant variable.

  const addValue = () => {
    //console.log("clicked", counter)
   
    setCounter(counter + 1) //whenever setCounter is called counter value will increment by 1
  
  }

  const removeValue = ()=>{
    if(counter ==0){
      setCounter.break()
    }else{
    setCounter(counter-1)
    }
    
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <br />
      <h2>Counter value: {counter}</h2>


      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}> Remove Value</button>
    </>
  )
}

export default App
