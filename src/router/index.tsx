import { createBrowserRouter, Outlet } from "react-router";
import Login from "../pages/Login";
import Home from "../pages/Home";


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
                element: <Home />,
                path: '/'
            }
        ]
    }
]);