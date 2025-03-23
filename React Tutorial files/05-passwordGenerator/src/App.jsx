import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {

  //using "useState()" hooks to add a state variable to componenets
  const [length, setLength] = useState(8); //setting state for slider
  const [numberAllowed, setNumberAllowed] = useState(false); //setting state for number
  const [charAllowed, setCharAllowed] = useState(false); //setting state for Character
  const [password, setPassword] = useState(""); //setting state for Character

//useRef(): is a React Hook that lets you reference a value that’s not needed for rendering.NOTE: useRef() is always stored in a variable an is injected where it is needed for, kisi bhi chiz ka reference lene ke lie use hota h
  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select(); //optionally selecting the password if it may or may not present to give user good UI
     window.navigator.clipboard.writeText(password) /*Imp: Window is only avialable in react because it does client side rendering but not avialable in NEXT.js */
  }, [password])


 /*using "useCallback()" hooks for storing function component in cache to reduce re-calculation between re-renders, useCallback() aapke code ko optimise karta h memoise karta h,
 numbers ke andar kuch change hua hai usko bhi cache ke andar rakho kuch bhi change hua h cache ke andar rakho taaki baar baar recalculate na karna pare*/
  const passwordGenerator = useCallback(() => {
    let pass = "" //pass is a variable that will store the generated passwod
    let str  = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxwz" //This is the set of values that may be selected by .random() functon to generate password

    if(charAllowed) str += "!@#$%^&-_=+~`'*(){}[]" //if the checkbox of Characters will be clicked then special characters is allowed
    if(numberAllowed) str += "0123456789" //if the checkbox of numbers will be clicked then special characters is allowed

    //function to generate a random passowrd
    for(let i = 0; i <= length; i++)
    {
      let char = Math.floor(Math.random() * str.length + 1) //generate a random password and store it in char
      pass += str.charAt(char); //append the value stored in char and "only select characters" and send it to variable "pass"
    }

    setPassword(pass); //calling setPassword() mothod initialised in  useState to store the generated password
  },
     [length, numberAllowed, charAllowed, setPassword]) //dependecncies, also it is not necessary to use 'setPassword' her but because we have to memoise the function we add a setPassword her so that the function do not recalculate it everytime
//NOTE:useCallback memoizes functions to prevent unnecessary re-creations, especially useful when passing callbacks to child components.


//------> useEffect()
//USING "useEffect() useEffect is a React Hook that lets you synchronize a component with an external system, syntax: useEffect(setup, dependencies?)"

/* useEffect: kabhi bhi useCallback() ki dependencies ko useCallback() se compare mat karna dono alag hai, useCallback() optimisation ke lie use hota hai memoisation ke lie use hota h
aur useEffect() ka use tab hota h jab bhi koi effect homki component me koi ched-chad ho re-run kardo, to useEffect() ki dependencied me vosab dalo jisme koi effect ho aur jisko sync krna ho external system ke sath*/
useEffect(() => {
  passwordGenerator()
}, [length, numberAllowed, charAllowed, passwordGenerator])

//DESIGNING UI
  return (
    <>
    {/*Designing the password generator textbox and background and copy button */}
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-9 py-8 my-8 text-orange-500 bg-gray-800'> 
        <h1 className='text-white text-center'>PASSWORD GENERATOR</h1>
           <div className='flex- shadow rounded-lg overflow-hidden mb-4 bg-gray-200 text-black'>
              <input 
                type='text'
                value = {password}
                className='outline-none w-full py-1 px-3'
                placeholder='Password'
                readOnly 
                ref = {passwordRef}// using "useRef()" to give a reference to the copy component
                /> </div> 
               

      <div align = "right"> <button onClick={copyPasswordToClipboard} className='outline-none bg-violet-900 text-pink-200 px-3 py-0.5 shrink-0 shadow-md rounded-lg '>COPY</button></div>
  

     {/*Designing the length slider and background and copy button */}
  <div className='flex tezt-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input
         type = "range"
         min = {6}
         max = {100}
         value = {length}
         className='cursor-pointer'
         //Whenever we fire a callback we get access to previous value by default and by change the previous value we can re adjust the component
         onChange={(e) => {setLength(e.target.value)}/*fired a callback function "onChange" here will only work of we pass and event "e" which will be done later but her we have just made the functioning of the slider */}
         />
           <label>Length:{length}</label>
    
    </div>
  </div>


     {/*Designing the checkboxes of Numbers */}
  <div align = "right" className='flex items-center gap-x-1'>
    <input 
       type = "checkbox"
       defaultChecked= {numberAllowed}
       id = "numberInput"
       onChange = {()=> {setNumberAllowed((prev) => !prev)}/*fired a callback function onChange to setNumberAllowed method to change the previous value or reverse the previous value => True aur False flip hota rhega eerytime you refresh the page*/}
       />
       <label>Number</label>
  </div>

 {/*Designing the checkboxes of Characters */}
 <div className='flex items-center gap-x-1'>
    <input 
       type = "checkbox"
       defaultChecked= {charAllowed}
       id = "characterInput"
       onChange = {()=> {setCharAllowed((prev) => !prev)}/*fired a callback function onChange to setNumberAllowed method to change the previous value or reverse the previous value => True aur False flip hota rhega eerytime you refresh the page*/}
       />
       <label>Special Characters</label>
  </div>


</div>
      
    </>
  )
}

export default App
