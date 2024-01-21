import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { routes } from './routes/Routes.jsx';
import { store } from './redux/store'
import { Provider } from 'react-redux'

let router =  createBrowserRouter(routes)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider >,
  </Provider>
)
