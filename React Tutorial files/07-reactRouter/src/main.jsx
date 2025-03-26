import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import { createRoutesFromElements } from 'react-router-dom'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'


//  const router = createBrowserRouter([
//   {
//     path: '/',
//     element : <Layout />,
//     children : [
//       {
//            path: "",
//            element: <Home />
//       },
//       {
//            path: "About",
//            element: <About />
//       },
//       {
//         path: "Contact",
//         element: <Contact />
//       },
//       {
//         path: "User/:Userid",
//         element: <User />
//       }]

//   }
//  ])

 const router = createBrowserRouter( //Routes must be palces as the nesting of the page suppose if you have arnav.jsx that is inside About.jsx so Arnav.jsx will we routed under About.jsx
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route loader = {githubInfoLoader}  path = "Github" element = {<Github /> } />  
      <Route path = 'Github' element = {<Github />} />
              

    </Route>

      )
    )



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} /> 
  </StrictMode>,
)
