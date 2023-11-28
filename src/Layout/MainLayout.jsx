import { Outlet } from "react-router-dom";
import Navber from "../Components/Header/Navber/Navber";
import Footer from "../Pages/Footer/Footer";


const MainLayout = () => {
    

    
    let mybutton = document.getElementById("myBtn");
  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
       <button onClick={topFunction} id="myBtn" title="Go to top">
         Top
       </button>;
    } 
  };

  

const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

    return (
      <>
        <Navber></Navber>

        <Outlet></Outlet>
       
        <Footer></Footer>
      </>
    );
};

export default MainLayout;
