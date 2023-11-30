import { Outlet } from "react-router-dom";
import Navber from "../../Components/Header/Navber/Navber";
import FooterSection from "../Footer/Footer";


const DashBoard = () => {
    return <div>
        <Navber></Navber>
        <Outlet></Outlet>
        <FooterSection></FooterSection>
    </div>;
};

export default DashBoard;