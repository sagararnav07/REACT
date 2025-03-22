import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Chai from './Chai'

function App() {
  const [count, setCount] = useState(0)
  
  const username = "by Arnav Sagar"; // note: this variable can be shown in the return inside an  {}-> expression
  return (
  <>
    <div>
{/*  Rule 1:In React, components are functions that return JSX, and when you use a component inside another component, you must write it as <Chai /> instead of just Chai() or <chai />. for more info goto Chai.jsx
  Rule 2: Also you can only return one element and if you need to return more than one element you can use "<div>" or just "<>"-fragment tag make a to fo it as shown down */}
        <Chai/> 
         <h2> Chai making in React {username /* this is an expression*/}</h2>
    </div>
    <h3>Chai aur React</h3>
  </> 
    
  )
}

export default App
