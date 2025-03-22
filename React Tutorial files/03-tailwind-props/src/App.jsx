import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-amber-500 text-8xl text-amber-800 p-7 rounded-4xl'>Arnav Sagar Learning React</h1>
     <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
  <div>
    <img class="size-100 shadow-xl rounded-md" alt="" src="https://tailwindcss.com/_next/static/media/cover.de1997f7.png" />
    <img class="size-100 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/31023876/pexels-photo-31023876/free-photo-of-charming-marbella-street-with-historic-architecture.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" />
    <img class="size-100 border-8 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/19651099/pexels-photo-19651099/free-photo-of-studio-shot-of-a-creamy-cake.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" />
  </div>
  <div class="flex items-center md:items-start">
    <span class="text-2xl font-medium">Class Warfare</span><br />
    <span class="font-medium text-sky-500">The Anti-Patterns</span> <br />
    <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400" >
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
    </>
  )
}

export default App
