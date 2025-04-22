import {createBrowserRouter, Outlet} from "react-router";
import Login from "../pages/auth/Login";
import Home from "../pages/root/Home";
import SignUp from "../pages/auth/SignUp";
// import Password from "antd/es/input/Password";
import MainLayout from "../layouts/MainLayout";
import Listings from "../pages/listCar/Listings";
import Blog from "../pages/blog/Blog";
import ForgotPassword from "../pages/forgotpassword/ForgotPassword";
import PasswordToken from "../pages/forgotpassword/PasswordToken";
import ResetPassword from "../pages/forgotpassword/ResetPassword";
const AuthLayout = () => {
    return <Outlet/>;  
}
export default createBrowserRouter([{
    element: <AuthLayout/>, children: [{
        element: <Login/>, path: '/login'
    }, {
        element: <SignUp/>, path: '/signup'
    },{
        element: <ForgotPassword/>, path: '/forgotpassword'
    }, {
        element: <PasswordToken/>, path: '/passwordtoken'
    }, {
        element: <ResetPassword/>, path: '/resetpassword'
    },
    ]
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
