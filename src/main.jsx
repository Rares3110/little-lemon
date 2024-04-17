import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from "./Pages/HomePage"
import BookingPage from "./Pages/BookingPage"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/booking",
    element: <BookingPage/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
