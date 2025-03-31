import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MainLayout() {
    return (
        <div className="transition-colors duration-400 relative">
            <div className="flex flex-col min-h-screen">
                <div className="mb-20"> <Header /></div>
                <main className="flex flex-col flex-1 ">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    );
}
export default MainLayout;