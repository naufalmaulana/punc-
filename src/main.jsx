import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/tailwind.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/index.js'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter, Navigate, Router } from 'react-router'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    element: <App />,
    // loader: () => {
    //   if(!localStorage.token){
    //     return redirect("/auth/login");
    //   }
    //   return null;
    // },
    children: [
      {
        path: "/",
        element: <Navigate to="/main/home" replace />,
      },
      {
        path: "/main/home",
        element: <Home />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
