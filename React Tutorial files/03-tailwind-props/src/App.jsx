import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)
   
  /*every method has props property in react */
  //props make the component reusable
  //Let's use props to insert an object in 2nd time we called Card component
   let myObj = { //passing object as props
    name: "Arnav",
    title: "Sagar"
   }

   let myArr = [] //passing array as props
  return (
    <>
     <h1 className = 'bg-red-400 text-5xl text-blue-100 rounded-2xl'>Tailwind Test</h1>
     <Card username = "Arnav Sagar" /> {/*Here we call the card.jsx but we can create more cards if we want to by calling it multiple times but if we call it other time and give some changes then we use props */}
     <Card  channel = "Chai Aur Code" someObj = {myObj} someArr = {myArr}/>
    </>
  )
}

export default App
