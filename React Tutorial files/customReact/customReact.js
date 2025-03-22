  
  
//Step 1. In order for 'customRender' to  work we need to create a function that can definde 'reactElement' it's working
function customRender(reactElement /*what to define*/, container /*where to store*/){

   /* Commenting this code because it is not efficient but read it during revision
    const domElement = document.createElement(reactElement.type); //creating an element called 'reactElement' and storing it in variable 'domeElement' 

    //inserting attributes in 'reactElement'
    domElement.innerHTML = reactElement.children; //assigning innerHTML into 'reactElement' children
    domElement.setAttribute('href', reactElement.props.href); //assigning href into 'reactElement' children
    domElement.setAttribute('target', reactElement.props.target);//assigning target into 'reactElement' children

    container.appendChild(domElement);  */

  //In above code we were writing same thing multiple times to set Attribute which is not good but this is good code
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;
    
    //using for-in loop to set attributes 
    for (const prop in reactElement.props) { 
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement);

} 

//Step 2.  we define 'reactElement' properties here and  what's it's supposed to do
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '--blank'
    },
    children: 'Click me to visit google'
}
const mainContainer = document.querySelector('#root'); //Step 3. We find the id of the element into which we want to render and store it in a variable here "maincontainer"


//Step 4. A method to render the above element : that means that add 'rootElement' function into '#root' element
customRender(reactElement /*what to render*/, mainContainer /*where to render*/)