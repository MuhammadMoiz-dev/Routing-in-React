import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/Login",
      element: <Login />
    },
    {
      path: "/About",
      element: <About />
    }
  ])
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />

    </>
  )
}

export default App
