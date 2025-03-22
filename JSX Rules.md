React and JSX come with several best practices and rules to ensure code maintainability, performance, and correctness. Below is a structured breakdown of React and JSX rules:

---

## **React Rules**
### 1. **Component Naming**
   - Always start component names with an uppercase letter.
   - Functional components should follow PascalCase.
   ```jsx
   function MyComponent() {
       return <h1>Hello, World!</h1>;
   }
   ```

### 2. **Return a Single Parent Element**
   - Components must return a single JSX element (wrap in a fragment if needed).
   ```jsx
   return (
       <>
           <h1>Title</h1>
           <p>Description</p>
       </>
   );
   ```

### 3. **Use Hooks Correctly**
   - Hooks **must not be called inside loops, conditions, or nested functions**.
   - Hooks should only be called **at the top level of a component** or inside another custom hook.
   ```jsx
   function MyComponent() {
       const [count, setCount] = React.useState(0); // Correct

       if (count > 5) {
           // Wrong: Hooks cannot be inside conditionals
           // const [error, setError] = useState(false);
       }

       return <button onClick={() => setCount(count + 1)}>{count}</button>;
   }
   ```

### 4. **Keys for List Rendering**
   - Each child in a list should have a unique `key` prop.
   ```jsx
   const items = ['Apple', 'Banana', 'Cherry'];
   return (
       <ul>
           {items.map((item, index) => (
               <li key={index}>{item}</li>
           ))}
       </ul>
   );
   ```

### 5. **Use the `useEffect` Hook Properly**
   - **Avoid unnecessary re-renders** by defining dependencies correctly.
   ```jsx
   useEffect(() => {
       console.log('Component mounted');
   }, []); // Runs only once when the component mounts
   ```

### 6. **Avoid Direct DOM Manipulation**
   - React updates the DOM efficiently, so avoid using `document.querySelector()` or `getElementById()`.
   - Use `useRef()` instead.
   ```jsx
   const inputRef = useRef(null);
   return <input ref={inputRef} />;
   ```

### 7. **Use `useCallback` and `useMemo` for Optimization**
   - Avoid unnecessary function re-creation.
   ```jsx
   const memoizedValue = useMemo(() => expensiveCalculation(num), [num]);
   ```

---

## **JSX Rules**
### 1. **Use Self-Closing Tags**
   - Elements without children must use self-closing syntax.
   ```jsx
   <img src="image.jpg" alt="Image" />  // Correct
   ```

### 2. **Use Curly Braces for Dynamic Values**
   - You can use JavaScript expressions inside `{}`.
   ```jsx
   const name = "React";
   return <h1>Hello, {name}!</h1>;
   ```

### 3. **Use `className` Instead of `class`**
   - Since `class` is a reserved word in JavaScript, JSX uses `className` for CSS classes.
   ```jsx
   <div className="container"></div>
   ```

### 4. **Boolean Attributes**
   - Use `true`/`false` for boolean attributes instead of explicit values.
   ```jsx
   <input type="checkbox" checked={true} />  // Correct
   <input type="checkbox" checked />         // Also Correct
   ```

### 5. **Inline Styles Must Be an Object**
   - Use double curly braces for inline styles.
   ```jsx
   <div style={{ color: "red", fontSize: "20px" }}>Styled Text</div>
   ```

### 6. **Fragments Instead of Empty `<div>`**
   - Prevent extra `<div>` wrappers in the DOM.
   ```jsx
   return (
       <>
           <h1>Title</h1>
           <p>Description</p>
       </>
   );
   ```

### 7. **Event Handling Uses CamelCase**
   - Always use camelCase for event handlers.
   ```jsx
   <button onClick={handleClick}>Click Me</button>
   ```

---

## **Best Practices**
1. **Keep Components Small & Reusable**
   - Break UI into smaller reusable components.
   ```jsx
   function Button({ label }) {
       return <button>{label}</button>;
   }
   ```

2. **Use `propTypes` for Type Checking**
   ```jsx
   import PropTypes from 'prop-types';
   function Greeting({ name }) {
       return <h1>Hello, {name}!</h1>;
   }
   Greeting.propTypes = {
       name: PropTypes.string.isRequired,
   };
   ```

3. **Lazy Load Components with `React.lazy`**
   ```jsx
   const LazyComponent = React.lazy(() => import("./LazyComponent"));
   ```

---

By following these rules, you can write cleaner, more maintainable React and JSX code! 🚀