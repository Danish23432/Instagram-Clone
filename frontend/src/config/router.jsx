import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoutes from '@/components/ProtectedRoutes';
import Home from '@/views/Home';
import ChatPage from '@/views/ChatPage';
import EditProfile from '@/views/EditProfile.jsx';
import Login from '@/views/Login';
import Signup from '@/views/Signup';
import Profile from '@/views/Profile';
import MainLayout from '@/views/MainLayout';
import NotFoundPage from '@/views/NotFoundPage';

const browserRouter = createBrowserRouter([
    {
        path: "/",
        element: <ProtectedRoutes><MainLayout /></ProtectedRoutes>,
        children: [
            {
                path: '/',
                element: <ProtectedRoutes><Home /></ProtectedRoutes>
            },
            {
                path: '/profile/:id',
                element: <ProtectedRoutes> <Profile /></ProtectedRoutes>
            },
            {
                path: '/account/edit',
                element: <ProtectedRoutes><EditProfile /></ProtectedRoutes>
            },
            {
                path: '/chat',
                element: <ProtectedRoutes><ChatPage /></ProtectedRoutes>
            },
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
])

function Router() {
    return <RouterProvider router={browserRouter} />
}

export default Router;