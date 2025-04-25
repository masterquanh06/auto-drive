import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet, useNavigate } from "react-router";
import { useEffect } from "react";
import { useGetMe } from "../hooks/useGetMe";
import { appStore } from "../store/user.store";

export default function MainLayout() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const { data } = useGetMe(!!token);
    const { setAppStore } = appStore();

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
        if (data) {
            setAppStore({ user: data });
        }
    }, [token, data]);

    return (
        <div className="transition-colors duration-400 relative">
            <div className="flex flex-col min-h-screen">
                <div className="z-1000 w-full">
                    <Header />
                </div>
                <main className="flex flex-col flex-1 ">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    );
}
