import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Biodatas from "../Pages/Biodatas/Biodatas";
import Login from "../Pages/Login/Login";
import Logout from "../Pages/SignUp/SignUp";
import AboutUs from "../Components/AboutUs/AboutUs";
import ContactUs from "../Components/ContactUs/ContactUs";
import AllbioDatas from "../Pages/AllbioDatas.jsx/AllbioDatas";
import BiodataDetails from "../Pages/BiodataDetails/BiodataDetails";
import PRoutes from "./PRoutes";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/biodatas",
        element: <Biodatas></Biodatas>,
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Logout></Logout>,
      },
      {
        path: "/allbiodatas",
        element: <AllbioDatas></AllbioDatas>,
      },
      {
        path: "/profileDetails/:_id",
        element: (
          <PRoutes>
            <BiodataDetails></BiodataDetails>
          </PRoutes>
        ),
        loader: () => fetch(`http://localhost:5000/allbiodatas`),
      },
    ],
  },
]);

export default Routes;
