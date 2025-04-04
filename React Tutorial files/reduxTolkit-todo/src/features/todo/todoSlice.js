//STEP 2

import {createSlice, nanoid } from "reduxjs/toolkit"; //createSlice is the method and nano id will the mark the components

const initialState = { //yhi state hai aur uiske andar ke value ko hi niche wale function me add modify etc sab kar rhe hai
    todos: [{id: 1, text: "Hello-World"}]
}

function sayHello(){
    console.log("Hellow")
}
export const todoSlice = createSlice({ //create slice ek reducer bnane ka method hai
    name: "todo",
    initialState,
    reducers:{ //aise hi reducers likhte hai
        addTodo: (state, action) => { //ye function hi add krega payload ko
            const todo = {
                id: nanoid(),
               text: action.payload
                }
                state.todos.push(todo)
        }, //remember this syntax state: gives access to present state,  action: value that will be given to modify state

        removeTodo: (state, action) => { //remove karna hai to hume pata hai jiske remove karna h uske cation me uska id zaroor mila hoga
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload) //jo id di hai usko match mat karo baaki sabko kaam me le aao
        },
    }
})

//export karne ka tarika bhi thora alag hai

export const {addTodo, removeTodo} = todoSlice.actions

//Store.js jo h vo ek restrictive store hai aur jabtak usko values nhi milegi tabtak vo work nhi krega
//usko chahiye ye sare reducers

export default todoSlice.reducer