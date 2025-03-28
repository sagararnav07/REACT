//1st file

import { createContext, useContext } from "react"; 

export const TodoContext = createContext({ //What think we are creating our context
   todos:
   [     //What we need
      {
       id:1,      //We need id of todo, agr database hota to khud ho jata
       todo: "Todo msg", //What will todo conatin 
       completed: false //if todo done or not (by default false untill you click on toggle button)
      }
   ],

   //writing functionalities of todo and what needed to do it
   addTodo:(todo) => {},  //to add
   updateTodo: (id, todo) => {}, //to update we need id of todo
   deleteTodo : (id) => {}, //to delete we need id
   toggleComplete: (id)=>{}//toggle completed we need id
 }
)


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider  = TodoContext.Provider