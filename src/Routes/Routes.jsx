import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
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
