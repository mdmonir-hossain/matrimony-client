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
import DashBoard from "../Pages/DashBoard/DashBoard";
import NormalUserDshBoard from "../Pages/DashBoard/NormalUserDshBoard";
import AdminDashboard from "../Pages/DashBoard/AdminDashboard";

import ViewBiodata from "../Pages/DashBoard/DashboardPages/ViewBiodata";
import RequestBiodata from "../Pages/DashBoard/DashboardPages/RequestBiodata";
import FavouritesBiodata from "../Pages/DashBoard/DashboardPages/FavouritesBiodata";
import EditBiodata from "../Pages/DashBoard/DashboardPages/EditBiodata";
import AdminDashboardDate from "../Pages/DashBoard/DashboardPages/AdminDashboardDate";
import ManageUsers from "../Pages/DashBoard/DashboardPages/ManageUsers";
import ApprovedPremium from "../Pages/DashBoard/DashboardPages/ApprovedPremium";
import ApprovedContactRequest from "../Pages/DashBoard/DashboardPages/ApprovedContactRequest";
import GotMarried from "../Pages/DashBoard/DashboardPages/GotMarried";
import SuccessStoryAdminShow from "../Pages/DashBoard/DashboardPages/SuccessStoryAdminShow";

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
        loader: () =>
          fetch(`https://b8a12-server-side-six.vercel.app/allbiodatas`),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PRoutes>
        <DashBoard></DashBoard>
      </PRoutes>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "normal",
        element: (
          <PRoutes>
            <EditBiodata></EditBiodata>
          </PRoutes>
        ),
      },
      {
        path: "admin",
        element: (
          <PRoutes>
            <AdminDashboard></AdminDashboard>
          </PRoutes>
        ),
      },

      {
        path: "editbiodata",
        element: (
          <PRoutes>
            <EditBiodata></EditBiodata>
          </PRoutes>
        ),
      },
      {
        path: "viewbiodata",
        element: (
          <PRoutes>
            <ViewBiodata></ViewBiodata>
          </PRoutes>
        ),
      },
      {
        path: "requestbiodata",
        element: (
          <PRoutes>
            <RequestBiodata></RequestBiodata>
          </PRoutes>
        ),
      },
      {
        path: "favouritesbiodata",
        element: (
          <PRoutes>
            <FavouritesBiodata></FavouritesBiodata>
          </PRoutes>
        ),
        loader: () =>
          fetch(`https://b8a12-server-side-six.vercel.app/addtofavourite`),
      },
      {
        path: "admindashboard",
        element: (
          <PRoutes>
            <AdminDashboardDate></AdminDashboardDate>
          </PRoutes>
        ),
      },
      {
        path: "manageusers",
        element: (
          <PRoutes>
            <ManageUsers></ManageUsers>
          </PRoutes>
        ),
      },
      {
        path: "approvedpremium",
        element: (
          <PRoutes>
            <ApprovedPremium></ApprovedPremium>
          </PRoutes>
        ),
      },
      {
        path: "approvedcontactrequest",
        element: (
          <PRoutes>
            <ApprovedContactRequest></ApprovedContactRequest>
          </PRoutes>
        ),
      },
      {
        path: "gotmarried",
        element: (
          <PRoutes>
            <GotMarried></GotMarried>
          </PRoutes>
        ),
      },
      {
        path: "successstory",
        element: (
          <PRoutes>
            <SuccessStoryAdminShow></SuccessStoryAdminShow>
          </PRoutes>
        ),
      },
    ],
  },
]);

export default Routes;
