import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

export default function MainLayout() {
    return (
        <div className="transition-colors duration-400 relative">
            <div className="flex flex-col min-h-screen">
                <div className="z-1000 w-full"> <Header /></div>
                <main className="flex flex-col flex-1 ">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    );
}