import { Outlet } from "react-router-dom";
import Navber from "../../Components/Header/Navber/Navber";
import FooterSection from "../Footer/Footer";
import NormalUserDshBoard from "./NormalUserDshBoard";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import AdminDashboard from "./AdminDashboard";


const DashBoard = () => {
    const { user } = useContext(AuthContext);
    return (
      <div className="flex flex-wrap flex-col lg:flex-row">
        <div>
          {user?.email === "admin@gmail.com" ? (
            <AdminDashboard></AdminDashboard>
          ) : (
            <NormalUserDshBoard></NormalUserDshBoard>
          )}
        </div>

        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default DashBoard;