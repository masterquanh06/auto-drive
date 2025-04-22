<<<<<<< Updated upstream
import {createBrowserRouter, Outlet} from "react-router";
=======
import { createBrowserRouter, Outlet } from "react-router";
>>>>>>> Stashed changes
import Login from "../pages/auth/Login";
import Home from "../pages/root/Home";
import SignUp from "../pages/auth/SignUp";
import PasswordToken from "../pages/PasswordToken";
import ForgotPassword from "../pages/ForgotPassword";
import Password from "antd/es/input/Password";
import ResetPassword from "../pages/ResetPassword";
import MainLayout from "../layouts/MainLayout";
import Listings from "../pages/listCar/Listings";
import DetailsProduct from "../pages/DetailsProduct";
<<<<<<< Updated upstream
import Cart from "../pages/cart/cart";
import Blog from "../pages/blog/Blog";
// Fixed AuthLayout component with proper return statement
const AuthLayout = () => {
    return <Outlet/>;  // Added return and fixed JSX syntax
}

export default createBrowserRouter([{
    element: <AuthLayout/>, children: [{
        element: <Login/>, path: '/login'
    }, {
        element: <SignUp/>, path: '/signup'
    }, {
        element: <Cart/>, path: '/cart'
    }, {
        element: <ForgotPassword/>, path: '/forgotpassword'
    }, {
        element: <PasswordToken/>, path: '/passwordtoken'
    }, {
        element: <ResetPassword/>, path: '/resetpassword'
    }, {
        element: <DetailsProduct/>, path: '/detailsproduct/:id'
    },]
}, {
    element: <MainLayout/>, children: [{
        element: <Home/>, path: '/',
    }, {
        element: <Home/>, path: '/home',
    }, {
        element: <Listings/>, path: '/listings'
    }, {
        element: <Blog/>, path: '/blog'
    }, {
        element: <Listings/>, path: '/contact'
    },


    ]
}]);
=======
// Fixed AuthLayout component with proper return statement
const AuthLayout = () => {
    return <Outlet />;  // Added return and fixed JSX syntax
}


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
            {
                element: <ForgotPassword />,
                path: '/forgotpassword'
            },
            {
                element: <PasswordToken />,
                path: '/passwordtoken'
            },
            {
                element: <ResetPassword />,
                path: '/resetpassword'
            },
            {
                element: <DetailsProduct />,
                path: '/detailsproduct'
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
                element: <Listings />,
                path: '/about'
            },
            {
                element: <Listings />,
                path: '/contact'
            },
            
        ]
    }
]);
>>>>>>> Stashed changes
