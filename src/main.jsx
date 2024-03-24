import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Blogs from './pages/Blogs.jsx'
import Bookmark from './pages/Bookmark.jsx'
import Mainlayout from './Layouts/Mainlayout.jsx'
import Home from './pages/Home.jsx'
import Blog from './pages/Blog.jsx'
import Content from './components/Content.jsx'
import Author from './components/Author.jsx'

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
      loader: ()=> fetch(`https://dev.to/api/articles?per_page=20&top=7`),
    },
    {
      path:"/blogs/:id",
      element: <Blog></Blog>,
      loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
      children:[
        {
          index: true,
        element: <Content></Content>,
        loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),

        },
        {
          path: "author",
        element: <Author></Author>,
        loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),

        },
      ]

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
