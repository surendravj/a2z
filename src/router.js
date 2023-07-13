import { createBrowserRouter } from 'react-router-dom'
import Home from './components/home'
import ErrorPage from './components/error-page'
import UserPage from './components/user-page'
import UserDetailsPage from './components/user-details-page'

export const Fallback = () => {
  return <p>Performing initial data load</p>
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: 'users/:count',
    element: <UserPage />,
    errorElement: <ErrorPage />
  },
  {
    path: 'user/:id',
    element: <UserDetailsPage />,
    errorElement: <ErrorPage />
  }
])
