import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const Main = () => {
    return (
        <>  
            <Navbar />
            <Outlet />
        </>
    );
};

export default Main;