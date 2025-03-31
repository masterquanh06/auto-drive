import { createBrowserRouter } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";


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
            }
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