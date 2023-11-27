import { Outlet } from "react-router-dom";
import Navber from "../Components/Header/Navber/Navber";
import Footer from "../Pages/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
