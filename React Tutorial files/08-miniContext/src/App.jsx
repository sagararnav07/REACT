import { useState } from 'react'
import './App.css'
import Login from './components/login'
import contextProvider from './context/userContext'


function App() {

  return (
    <>
        <contextProvider>
        <h1>React with Chai</h1>
        <Login />
        </contextProvider>
   
      
    </>
  )
}

export default App
