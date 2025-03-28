import { useEffect, useState } from 'react'

import './App.css'
import { TodoProvider } from './context'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'


function App() {
 
  const [todos, setTodos] = useState([]) //by default empty array

  // const addTodo = (todo) =>{
  //   setTodos((prev => [todo,...prev])) /*the logic is if we want to add new todo and if we do setTodos(todo) then all previous todos and data will be erased and it will be stored.
  //                                      But we don't want that we just want to inject new todo so what we are doing we are giving a callback function that will destructure the previous 
  //                                      values and store new todo on top */
  // }

  /*but we have not defined todo in the above code as in the TodoCOntext.js only the todo structure is given not it's functionality*/

  //ADD
  const addTodo  = (todo) =>{
    setTodos((prev)=>[{id: Date.now(), ...todo}, ...prev])
  }

  //UPDATE
  const updateTodo = (id, todo) =>{
     setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? /*if tuew*/todo : prevTodo /*if false */)))
  }
  /* Above logic explaination:- todo is an array with many objects so we search for the id of the object we want to chnage in the array using map
  and if we found the id which is equal to user's id then insert new todo or if not let it be the same*/


  //DELETE
  const deleteTodo = (id) => {
    setTodos((prev)=> prev.filter((todo) => todo.id !== id))
  }
/* Above logic explaination:- we filter the id, those todos are only allowed whose id does not match the given id */

const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id == id? {...prevTodo, completed: !prevTodo.completed} : prevTodo))}
/*
setTodos:

This function updates the state of todos (assuming you're using useState in React).
Callback Function (prev) => {...}:
This takes the previous state (prev), which is an array of todos.
map() creates a new array where:
If prevTodo.id === todo.id, we toggle its completed status.
Otherwise, we return the unchanged prevTodo.
Toggling completed Property:
{ ...prevTodo, completed: !prevTodo.completed } creates a new object with the updated completed field.
 */


//LOCAL STORAGE -> We useEffect to quesry Local Storage and take all the values and insert in [todo,setTodo]. go to mdn to learn about Local Storage

//To get data from local storage
useEffect(() => { //localstroge returns values in string we need it in.json
  const todos = JSON.parse(localStorage.getItem("todos"))

  if(todos && todos.length > 0)
  {
    setTodos(todos)
  }
}, [])

//To store data back into local Storage 
useEffect(() =>{
  localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])


  return (
    <TodoProvider value = {{todos,addTodo,updateTodo, deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key  = {todo.id} className='w-full'>
                            <TodoItem todo={todo} />

                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
