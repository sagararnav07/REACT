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



  **05.Why you need hooks and project, useState() 02-counter**

   Why we need hooks? It's because the UI display in react is controlled by react
   the most important thing is that hooks can change the entire document, for i.e if we need to change something we will do *document.getElementbyId(#id)* then we have to change that each time, but with hooks every single time the variable is mention will change the state

   1. Hooks come from *import {useState, other hooks} from react*
   2. Created functions like *addValue and removeValue*
   3. Learned the basics of hooks and how to use it in project

   ### useState is a React Hook that lets you add a state variable to your component.
            **const [state, setState] = useState(initialState)**
            https://react.dev/reference/react/useState



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

    **08. A react interview question on counter**

      if we do this

      let[counter, setCounter] = useState(15)

      setCounter(counter+1)
      setCounter(counter+1)
      setCounter(counter+1)
      setCounter(counter+1)

      What will be it's output

      **09. Building a react Project| bgChanger  04-bgChanger**

   1. We create a project where we can select the color to chnage the color in the ui
   2. We create a project but why we use <div className = ""> instead of <div class = ""> ? it's because  className id a reserved keyword in React to name classes
   3. We create a classname that sets the bottons location and then we create buttons of different colors 
   4. *IMPORTANT* For changing the color of the entire page we can use *onClick()* method but we should not just pass the reference in
      *onClick()* like this *<button onClick = {setcolor("red")}></button>* what we should do is *onClick()* expects a function not a reference and if you just give a reference it will not be able to give you parameters so use a *Call Back Function* like this
      *<button onClick = { ()=> setcolor("red")} > </button>*


   **10. useEffect, useRef and useCallback with 1 project  05-passwordGenerator**

   Note: The first thing that you should remember while using react is that while using react the control of UI is in the hands of react to do not yours and in order to render/re-render things in UI the full control is in hands of hooks in react like *useState(), useCallback(),useEffect(),  useRef() etc*


   1. Aim is to create a password generator that can have a slider for managing length, a number checkbox and a character checkbox
   2. Initialise project with vite and tailwind then we use *useState()* to set/manage state of each of the following a slider for managing length, a number checkbox and a character checkbox
   3. We then set state of password for if the program runs then how it generates password and stores it for i.e it does some API calls or function calles etc
   4. *IMPORTANT *Create a function called password generator but we need to call the same function when we checkbox with numbers or characters so everytime re-render it we use 
   ### useCallback() : useCallback is a React hook that let's you cache a function definition between re renders
       **const cachedFn = useCallback(fn, dependencies)**
       https://react.dev/reference/react/useCallback
   Note: The dependencies are passed in an array in *useCallback()*

NOTE: using "useCallback()" hooks for storing function component in cache to reduce re-calculation between re-renders, useCallback() aapke code ko optimise karta h memoise karta h,
numbers ke andar kuch change hua hai usko bhi cache ke andar rakho kuch bhi change hua h cache ke andar rakho taaki baar baar recalculate na karna pare
   
   5. Designing the password generator textbox and background and copy button

   6. Designing the length slider and background and copy button

      NOTE:  //Whenever we fire a callback we get access to previous value by default and by change the previous value we can re adjust the component
         onChange={(e) => {setLength(e.target.value)}/*fired a callback function "onChange" here will only work of we pass and event "e" which will be done later but her we have just made the functioning of the slider */}

   7. Designing the checkboxes of Numbers

      NOTE: onChange = {()=> {setNumberAllowed((prev) => !prev)}/*fired a callback function onChange to setNumberAllowed method to change the previous value or reverse the previous value => True aur False flip hota rhega eerytime you refresh the page*/}


   8. Designing the checkboxes of Characters

   9. Calling the function *passowrdGenerator()* using *useEffect()*

 ### useEffect() : useEffect() is a React Hook that lets you synchronize a component with an external system 
 **useEffect(setup, dependencies?)**

NOTE: useEffect: kabhi bhi useCallback() ki dependencies ko useCallback() se compare mat karna dono alag hai, useCallback() optimisation ke lie use hota hai, memoisation ke lie use hota h
aur useEffect() ka use tab hota h jab bhi koi effect ho component me koi ched-chad ho to re-run kardo, to useEffect() ki dependencied me vosab dalo jisme koi effect ho aur jisko sync krna ho external system ke sath*

  10. Designing copy button with *useRef()* so that we can copy the latest password that is generated

### useRef(): is a React Hook that lets you reference a value that’s not needed for rendering.
**const ref = useRef(initialValue)**

NOTE: useRef() is always stored in a variable an is injected where it is needed for, kisi bhi chiz ka reference lene ke lie use hota h
ref = {passwordRef}// using "useRef()" to give a reference to the copy component

 11. Created a function *copyPasswordToClipboard* with it's reference in the button tag to store the password to clipboard
 12. used *setCallback()* to optimise it and passed password as a dependency and then create a method to write password to clipboard

   

    **11. Custom hooks in react | currency project  05-passwordGenerator**

  1. Aim to create a cyreency convertor that convert the currency of one country to other by api calls
  2. We are going to create custom hooks here and so we made a folder called *hooks* folder
     
  3. Create a hooks called *useCurrencyinfo()* for converting the exchange rates
     we use an api from *currency.md* file

     note: most api call value in .json returns a string so we have to handle it and 
     if you use the currency api given in currency.md ile and copy and paste it in url the change ${currencies} to inr/usd or any 
     other currency to know exchange rates

   4. Creating components and how to make components re-usable. We create a folder called components
   5. Create a file caled *InputBox.jsx* and here create the components like *label, input amount, currenct type etc*

   6. We loop *currencyOptions and pass the variable curreency* as a value so the whenever the user select the currency it shows

   7. we create an index.html file and import/expor the components in one file so when you need to import you just need to import that index.js file 

   8. To make components unique we bind them with *id* and we get that from *useId()* hook

   ### useId(): useId() is a React Hook for generating unique IDs that can be passed to accessibility attributes.

   9. We bind label with the useId() state using variable amountInputId()
   10. In app.jsx we create multiple useState like [amount,setAmount][from, setFrom],[to, setTo],[convertedAmount], [setConvertedAmount]

   11. We import the *useCurrencyInfo()* into app.jsx and use it
   12. We create functions like *useCurrencyInfo*, *swap*, *convert* and modified below components

   12. solved errors in useCurrencyInfo.js by using try catch block



