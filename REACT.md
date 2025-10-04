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
   2. We create a project but why we use <div className = ""> instead of <div class = ""> ? it's because  class is a reserved keyword in React to name classes
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




  **12. React router Crash course 07-reactRouter**
  
   1. Read *Router-Dom.md*
   2. We create a header and a footer in components and the new thing is link and navlink - why we use link and don't use <a>
     tag is because <a> tag completely refresh the page which is not a good concept for react.

   3. Why we have written *className* in a callback function so that we can manipulate the classes
   4. 🔹 What is <NavLink>?
        <NavLink> is a specialized version of <Link> in React Router that provides an active state when the link matches the current URL. This is useful for highlighting navigation items (e.g., in a navbar).
   5. We can manipulate the classes using *isActive* by inserting a variable  ${isActive ? "text-orange-700" : "text-gray-700"}
       <nav>
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? "active-link" : "nav-link"}
      >
        Home
      </NavLink>
       The className prop is passed a function {({ isActive }) => ...}.
       If isActive is true, the link gets the active-link class. Otherwise, it gets the nav-link class.

    6. Created more components like Header, Foorter, Home
    7. How to navigate thorough react router is we done need app.jsx, We go in main.jsx and delete <App />
       As we are going to use react router to navigate
       .We create a method called  *const router = createBrowserRouter([])* and we take an array in this method to store all the objects we need

   8. We create a file in src called "Layout.jsx" what it does it stores all the components so that we don't have to manipulate in each one one and we use a method from react router called *Outlet* : The main function of outlet is to make changes where 

   In React, especially when using React Router, the <Outlet /> component is used to render child routes within a parent route. It acts as a placeholder for the nested route components.

Usage of <Outlet /> in React Router
When you define a parent route with nested child routes, <Outlet /> is placed in the parent component where the child components should be rendered.

How <Outlet /> Works?
When navigating to /, <Home /> will be rendered inside <Outlet />.

When navigating to /about, <About /> will be rendered inside <Outlet />.
 
When navigating to /contact, <Contact /> will be rendered inside <Outlet />.

NOTE: <Outlet /> ka simple meaning ye hai ki isko header aur footer ke beech me daal dene se header or footer chnage hong ye nhi hoga change

 9. in  main.jsx we do is give a router where does the routes coming from <RouterProvider router={router} /> 
 10. In main.jsx we provide different routes for different components using react router inbuilt methods like createBrowserRouter([]) //where  we are passing array of all componet's path and element name

 11. We run the application debug it  and then we used *to* keyword in Header.jsx to give <Navlink to = "/">  path that where should the component should take you

 12. We added the path of About in main.jsx then *About becomes active*
 13. Learn how to access a component's id, for i.e Created a *User.jsx* component and then passed it a userid then
     passed it as a path in main.jsx her we use a react-router feature called **useParams**

 ### How useParams Works
     useParams is a hook provided by React Router that allows you to access URL parameters inside a React component. It is commonly used when dealing with dynamic routes, such as fetching specific user details, blog posts, or product pages.When a route contains dynamic segments (e.g., /user/:id), useParams extracts these parameters as an object.
     When to Use useParams
✅ Use useParams when you need to extract values from the URL dynamically, such as:

Fetching user, product, or blog details from an API
Implementing pagination (/products/page/2)
Navigating based on category (/shop/category/electronics)

❌ Avoid using useParams when:

You don’t need dynamic routing (use state instead).
You have a small, static set of pages (hardcode routes).

14. Create a new component *Github.jsx* in Github then add it's route in *main.jsx* then Added it in *Header.jsx*
15. How would we see github followers when we do an API call using *fetch()* and when do we need to do api calls? when we 
   mount the github component
16. create a promise in  useEffect() method that calls the Api whenever the componenet is mounted and a useState([data,setData]) method that can set the the state variable for the component and updates the followers
17. we know that in github there is an key value pair of {followrers: 2} we use that {data.followers}  and we start getting followers
18. We create 
A loader in React.js is typically used to indicate that some asynchronous operation (like data fetching or processing) is in progress. Here are some common ways to implement a loader in React:

### React route loader
/*In React.js, route loaders are primarily used in React Router (v6.4 and later) to fetch data before rendering a route. This is useful for preloading data for a page, 
                                                      improving performance, and ensuring that the required data is available when a route is loaded.
                                                      1  . What is a Route Loader?
                                                      A loader is a function that runs before a route is rendered and returns data to be used in the component.
                                                      2. How to Use Loaders in React Router?You can define a loader function and pass it to a route using loader inside createBrowserRouter.*/

    

19. We crreated a path route for the method in the main.jsx file and we are done

### Most important thing: Everything we have done in main.jsx to provide routes is only possible because we have made a file called Layout.jsx in src, because of that we have imported "Outlet" from react-router due to which we were able to create routes in main.jsx and that outlet helped us make layout of the page and in that format we passed the route first the layout then home the other componemts. Everything you pass as a route should be in order of the DOM. FOr eg if you have localhos:3000/About/Arnav, so the route will be passed in the same order 


### API CONTEXT WE HAVE NOT WRITTEN

*** 13. REDUX TOOLKIT***
1. IMPORT REDUX configureStore(): We create a folder to import "Store" from redux and imported it in App.js
2. created a folder called features in which we have defined multiple reducers
3. createSlice() is a function from Redux Toolkit that simplifies writing Redux logic by reducing boilerplate code. It helps you: 1. Define the initial state 2. Create reducers and action creators 3.Automatically generate action types

    -- Defined initialstate 
    --Used : todoSlice
    -- **name property**: //name property is by default the property of createSlice();
    --Refrenced the initialstate inside the reducer //kuch log initialstae andar hi define krte h but best pactice yahi h initialstate bahar define kiya jaye aur usko reference andar kiya jaye

  

   ## Properties of createSlice()
 The `createSlice()` function in Redux Toolkit takes a **configuration object** with a few important properties. Here are the **main properties** you can (or should) pass into it:

---

### 🔑 1. `name` (string)
- A unique name for the slice.
- Used as a prefix for the generated action types.

**Example:**
```js
name: 'counter'
```

---

### 🔑 2. `initialState` (object or primitive)
- The initial state of this slice of the store.
- Can be any data type (object, array, number, etc.)

**Example:**
```js
initialState: {
  value: 0
}
```

---

### 🔑 3. `reducers` (object)
- An object where each key is a reducer function (like a case in a switch).
- Each reducer receives the `state` and `action` as arguments.
- You can safely "mutate" the state thanks to Immer.

**Example:**
```js
reducers: {
  increment(state) {
    state.value += 1;
  },
  decrement(state) {
    state.value -= 1;
  }
}
```

---

### 🧩 4. `extraReducers` (object or callback function)
- For handling **actions defined outside** the slice, like those from async thunks or other slices.
- Can be:
  - An object with action types as keys, or
  - A builder callback (recommended)

**Example (builder callback):**
```js
extraReducers: (builder) => {
  builder
    .addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
}
```

---

### Summary Table:

| Property       | Type     | Required | Description |
|----------------|----------|----------|-------------|
| `name`         | `string` | ✅ Yes   | Unique slice name |
| `initialState` | `any`    | ✅ Yes   | Initial state value |
| `reducers`     | `object` | ✅ Yes   | Reducer functions for this slice |
| `extraReducers`| `object` / function | ❌ Optional | For handling external actions (like async thunks) |

---

Want a visual diagram or a working example project?



4. Create reducer: createSlice ka paroperty h **reducers:{}** but iske andar aata kya hai? Iske andar aata h properties aur functions

reducers:{ //aise hi reducers likhte hai
        addTodo: (state, action) => { //ye function hi add krega payload ko
            const todo = {
                id: nanoid(),
               text: action.payload
                }
                state.todos.push(todo)
        }, //remember this syntax state: gives access to present state,  action: value that will be given to modify state

5. We create the functionality to add todo inside the reducer, we got to know how to use **addTodo: (state,action)** pushed the todo after that using **state.todos.prush(todo)**

6. Same like we created addTodo we created removeTodo and then exported it like ths export const {addTodo, removeTodo} = todoSlice.actions //ye export components me kaam  ayega
7. We export it like todoSlice.reducer also this is because of the store because store wants it as store will only accept only defined reducers becuase it's a closed state //ye export store me kaam aayega isliye dono type se export karna zaruri hai 

*** yaha tak jo bhi hua wo store ke liye hua aur ab aage humlog useSelector aur useDispatcher padhenge ***

--------- 

8.Ab hum components bnayenge 1. Addtodo() ka components bnayenge: logic-> todo ko add karna h ye hoga jab hum useDispatch() ka use karenge 
9. addTodoHandler : form on submit create krke uska upar me function define krna h 
10. Important useDispatch reducers ke through store me add karna hai to humlog useDispatch() pass kar rhe h
11. lekin use dipach me todo function khud se nahi aajaega to isliye humne todoSlice me addTodo, removeTodo alag alag add kiya h taki unko alag alag call krke use kare
//IMP
12. dispatch ke andar hi addTodo call karna parta h aur uske andar hi reducer hi call krna padta h

**useDispatch** ka kaam hogya aage iske **useSelector** dekhenge

13. Ab hum Todos.jsx me kaam karenge aur isme hume todo ki list karna hai jo humne AddTodo ke inital state me object bnakr dala h to uspe loop lagane se ho jaega but values kaha se milengi? **STORE** se
14. Todo list krne ke liye to **useSelector** ka use kar lenge lekin agar hume koi bhi todo ko delete karna hai to hum kaise karenge ? Hume us todo ko remove karne ke liye store se access lena hoga aur vo kaise hoga? Vo *useDispatcher* ka use karke hoga isliye hum *useDispatcher ka use karenge* Todo.jsx me bhi