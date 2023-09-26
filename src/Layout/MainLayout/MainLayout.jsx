import { Outlet } from "react-router-dom";
import Navbar from "../../components/Header/NavBar/Navbar";



const MainLayout = () => {
    return (
        <div>
            <div className="max-w-[1440px] mx-auto">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;