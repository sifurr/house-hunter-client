import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const MainLayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet />
            <h2 className='text-lg text-center my-10'>Footer</h2>
        </div>
    );
};

export default MainLayout;