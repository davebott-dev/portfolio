import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Index from './Index.jsx';
import Root from './routes/Root.jsx';
import Contact from './routes/Contact.jsx';
import Projects from './routes/Projects.jsx';

const router= createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        index: true,
        element: <Index/>,
      },
      {
        path: '/contact',
        element: <Contact/>,
      },
      {
        path: '/projects',
        element: <Projects/>,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
