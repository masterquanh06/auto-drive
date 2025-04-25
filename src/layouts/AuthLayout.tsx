import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

const AuthLayout = () => {
    const navigate = useNavigate();
    const isSignined = localStorage.getItem("token");
    useEffect(() => {
        if (isSignined) {
            navigate("/")
        }

    }, [isSignined])
    return <Outlet />;
}
export default AuthLayout;