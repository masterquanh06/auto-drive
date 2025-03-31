import { createBrowserRouter } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";

import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Home from "../pages/root/Home";


export default createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            {
                element: <Login />,
                path: '/login'
            },
            {
                element: <SignUp />,
                path: '/signup'
            },

        ]
    },
    {
        element: <MainLayout />,
        children: [
            {
                element: <Home />,
                path: '/'
            }
        ]
    }
]);