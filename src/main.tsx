import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'

import MainPage from './pages/MainPage.tsx';


const routesConfig = [
  {
    path: '/',
    element: <MainPage />,
  },

];

const router = createBrowserRouter(routesConfig);



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
