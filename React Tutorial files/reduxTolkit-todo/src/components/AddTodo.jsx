import { addTodo } from '../features/todo/todoSlice'

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

function AddTodo() { //todo bnane ki functionality

  const [input,setInput] = useState('')
  const dispatch = useDispatch() //ye karega kya todo jo humne reducer bnaya h usko bhejega store me

  const addTodoHandler = (e)=>{
    e.preventDefault() //so that form can't submit on default
    dispatch(addTodo(input)) //ye call kiya dispatch aur addTodo iske andar hi rhega
    setInput('')//clean the form after one user
  }
  return (
    <form onSubmit={addTodoHandler} className='space-x-3 mt-12'>
      <input 
           type='text'
           className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
           placeholder='Enter a todo'
           value = {input}
           onChange={(e)=> setInput(e.target.value)}
      />
       <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo