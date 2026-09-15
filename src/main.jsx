import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
import './index.css'
import Home from './Home.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ContactMe from './component/ContactMe.jsx';
import MainLayout from './layout/MainLayout.jsx';
import MyProject from './component/MyProject.jsx';
import AboutMe from './component/AboutMe.jsx';
import MySkill from './component/MySkill.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/contact-me",
        element: <ContactMe></ContactMe>
      },
      {
        path: '/projects',
        element: <MyProject></MyProject>
      },
      {
        path: "/about",
        element: <AboutMe></AboutMe>
      },
      {
        path: "/my-skill",
        element: <MySkill></MySkill>
      }
    ]
  },




]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <RouterProvider router={router} />
    </MotionConfig>
  </StrictMode>,
)
