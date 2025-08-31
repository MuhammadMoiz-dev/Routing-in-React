import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Link } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import './App.css'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/Login",
      element: <><Navbar /><Login /></>
    },
    {
      path: "/About",
      element: <><Navbar /><About /></>
    }
  ])
  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
