import { createBrowserRouter } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";

import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Listings from "../pages/listCar/Listings";
import Home from "../pages/root/Home";
import Blog from "../pages/blog/Blog";


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
                path: '/',
            },
            {
                element: <Listings />,
                path: '/listings'
            },
            {
                element: <Blog />,
                path: '/blog'
            },
            {
                element: <Listings />,
                path: '/contact'
            },
        ]
    }
]);