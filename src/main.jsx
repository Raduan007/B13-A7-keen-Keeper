import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router';
import RootLayout from './layout/RootLayout';
import HomePage from './pages/homepage/HomePage';
import TimelinePage from './pages/timelinepage/TimelinePage';
import StatsPage from './pages/statspage/StatsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import FriendsDetails from './pages/friends/FriendsDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
        {
          path:'/',
          element: <HomePage/>
        } ,
        {
          path:'friends/:id',
          element:<FriendsDetails/>
        },
        {
        path:'/timeline',
        element:<TimelinePage/>
        },
       {
         path:'/stats',
        element: <StatsPage/>
       }
    ],
    errorElement: <NotFoundPage/>
  },



]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} /> 
  </StrictMode>,
)

