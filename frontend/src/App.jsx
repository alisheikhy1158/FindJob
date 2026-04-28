import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Signin from './components/auth/signin'
import Signup from './components/auth/signup'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDetails from './components/JobDetails'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/signin',
    element: <Signin />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },

  {
    path: '/jobs',
    element: <Jobs />,
  },

  {
    path: '/details/:id',
    element: <JobDetails />,
  },

  {
    path: '/browse',
    element: <Browse />,
  },

  {
    path: '/profile',
    element: <Profile />,
  },

  {
    path: '/profile/',
    element: <Profile />,
  },


])

function App() {
  return (
    <RouterProvider router={appRouter} />
  )
}

export default App