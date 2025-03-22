const Chai = () => (<h1>Chai aur react with vite</h1>);

/*Why do we return <Chai /> in App.jsx?
In React, components are not just functions—they are treated as JSX elements when used inside JSX. Writing <Chai /> tells React that:

It is a component

React recognizes that Chai is a function that returns JSX.
It calls the function automatically and injects the returned JSX (<h1>Chai aur react with vite</h1>) into the DOM.
It follows JSX syntax

JSX expects components to be written in PascalCase (Chai instead of chai).
Writing <Chai /> tells React it's a component.
Writing <chai /> will make React treat it as a normal HTML tag, which doesn't exist.
*/
export default Chai