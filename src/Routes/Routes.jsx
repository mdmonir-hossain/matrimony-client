import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/biodatas",
        element: <div>Biodatas</div>,
      },
      {
        path: "/aboutus",
        element: <div>About Us</div>,
      },
      {
        path: "/contactus",
        element: <div>Contact Us</div>,
      },
    ],
  },
]);

export default Routes;
