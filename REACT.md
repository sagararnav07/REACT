# CHAI AUR REACT FULL

**03.understand the react flow and structure 01-vite-react**

 Rule 1:In React, components are functions that return JSX, and when you use a component inside another component, you must write it as <Chai /> instead of just Chai() or <chai />. for more info goto Chai.jsx

 Rule 2: Also you can only return one element and if you need to return more than one element you can use `"<div>"` or just `"<>"`-fragment tag make a to fo it as shown down 


 **04.Create your own react library and JSX 02-counter**

  Created your own react element in "customReact" folder
   1. in index.html we created named an element with id "root"
   2. in "customReact" folder we didn't knew how react created an element 
      so we created an element called "reactElement" where we assigned it's properties
   3. Then we created a function "customRender" to render "reactElement" into a "container"
      and also assigned it with attributes like 'href' and 'target'
   4. Then we did the same thing in step 3 using a more efficiently by assigning attributes
       using for in loop
   5. Learned about how to insert a "evaluated expression" in a div

  **05.Why you need hooks and project 02-counter**

   Why we need hooks? It's because the UI display in react is controlled by react
   the most important thing is that hooks can change the entire document, for i.e if we need to change something we will do *document.getElementbyId(#id)* then we have to change that each time, but with hooks every single time the variable is mention will change the state

   1. Hooks come from *import {useState, other hooks} from react*
   2. Created functions like *addValue and removeValue*
   3. Learned the basics of hooks and how to use it in project

  **06.Virtula DOM, Fibre and Reconciliation**
   
    https://github.com/acdlite/react-fiber-architecture
   
   1. Virtual DOM in simple language is like comparing two trees and then adjusting the chnages just working like Github's model

  **07. Talwind and Props in React.js 03-tailwind-props**

    1. Learning about installing Tailwind and also how to use it(basics)
    2. What are props? Props is and object in React  *props make the componenet reusable*
    3. Created *Card.jsx* and imported it in *App.jsx* and then used props in *Card.jsx* to console log *How to use props and how does it dispays*
    4. Passed Object and Array as props in the component to display in Card.jsx
    5. Passed username as props in *Card.jsx* then used it to dispaly name in *App.jsx*
    6. How to insert *BtnText* into App.js using props

    ### -------------------------------Basics/ Foundations Done----------------------------