import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AdminDashboard from './components/AdminDashboard'
import Login from './components/Login'
import RootLayout from './components/RootLayout'
import Register from './components/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
