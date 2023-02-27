import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ErrorPage, Gestures, Phonemes, Root } from "./pages"
import Main from './pages/Main'

// Router construction
const router = createBrowserRouter([
  {
    path:'/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Main />
      },
      {
        path: 'gestos',
        element: <Gestures />
      },
      {
        path: 'fonemas',
        element: <Phonemes />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
