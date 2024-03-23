import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Blogs from './pages/Blogs.jsx'
import Bookmark from './pages/Bookmark.jsx'
import Mainlayout from './Layouts/Mainlayout.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children:[{
      path: "/",
      element: <Home></Home>

    },
      {
      path: "/blogs",
      element: <Blogs></Blogs>,
    },
    {
      path: "/bookmarks",
      element: <Bookmark></Bookmark>,
    }]
  }
  
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
