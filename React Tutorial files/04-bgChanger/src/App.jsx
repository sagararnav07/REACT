import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    //setting background color
      <div className='w-full h-screen duration-200'
      style = {{backgroundColor : color /*syntax to use inline css in react*/}} > 
      
     {/*Setting bottom bar the below given cde is for the location of the color bar*/}
       <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> T
         <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3  py-2rounded-3xl' >
          <button onClick={()=> setColor("red")} className='outline-none px-9 py-5 rounded-3xl text-3xl'  style ={{backgroundColor : "Red"}}>RED</button>
          <button onClick={()=> setColor("green")}className='outline-none px-9 py-5 rounded-3xl text-3xl'  style ={{backgroundColor : "Green"}}>GREEN</button>
          <button onClick={()=> setColor("purple")}className='outline-none px-9 py-5 rounded-3xl text-3xl'  style ={{backgroundColor : "Purple"}}>PURPLE</button>
          <button onClick={()=> setColor("yellow")}className='outline-none px-9 py-5 rounded-3xl text-3xl'  style ={{backgroundColor : "Yellow"}}>RED</button>
          <button onClick={()=> setColor("blue")}className='outline-none px-9 py-5 rounded-3xl text-3xl'  style ={{backgroundColor : "BLUE"}}>BLUE</button>
         </div>
       </div>  
    </div>     
    </>
  )
}

export default App
