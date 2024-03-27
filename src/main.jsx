import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Route from './Components/Route.jsx';
import Home from './Components/NavBar/Pages.jsx/Home/Home.jsx';

import Booklisted from './Components/NavBar/Pages.jsx/List Book/Booklisted.jsx';
import Readpage from './Components/NavBar/Pages.jsx/ReadBooks/Readpage.jsx';
import CardDetail from './Components/NavBar/Pages.jsx/Home/Card Detail/CardDetail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route />,
    children:[
      {
        path:"/",
        element:<Home />,
      },
      {
        path:"/booklist",
        element:<Booklisted />,
        loader: () => fetch('/Card.json')
      },
      {
        path:"/readpage",
        element:<Readpage />
      },
      {
        path:'/homecard/:bookId',
        element:<CardDetail />,
        loader:() => fetch('../Card.json')
      }

    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  
  </React.StrictMode>,
)
