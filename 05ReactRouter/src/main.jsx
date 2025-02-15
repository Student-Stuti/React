import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/about/About.jsx'
import Home from './components/home/Home.jsx'
import Layout from './components/Layout.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children:[
      {
        path : "",
        element : <Home/>
      },{
        path : "about",
        element : <About/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
