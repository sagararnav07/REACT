import React from 'react'

function Card(props) {
    
  return (
   <>
     <h1  className='bg-amber-500 text-8xl text-amber-800 p-7 rounded-4xl'>Arnav Sagar Learning React</h1>
     <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
  <div>
    <img className="size-100 shadow-xl rounded-md" alt="" src="https://tailwindcss.com/_next/static/media/cover.de1997f7.png" />
  </div>
  <div className="flex items-center md:items-start">
    <span className="text-2xl font-medium">{props.username}</span><br />
    <span className="font-medium text-sky-500">The Anti-Patterns</span> <br />
    <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400" >
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
   </>
  )
}

export default Card