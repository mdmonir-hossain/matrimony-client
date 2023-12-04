import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const AdminDashboard = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const handleLogout = () => {
      logOutUser()
        .then((result) => {
          console.log(result.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  return (
    <div>
      <div className="bg-[#522b79] w-[300px] min-h-screen flex flex-col text-white gap-4 p-4">
        <div className="flex justify-between">
          <h1 className=" text-white text-xl ">Admin DashBoard</h1>

          <Link to="/" className=" text-white text-xl ">
            Home
          </Link>
        </div>
        <hr />
        <Link to="/dashboard/AdminDashboard">Admin Dashboard</Link>
        <Link to="/dashboard/ManageUsers">Manage Users </Link>
        <Link to="/dashboard/ApprovedPremium">Approved Premium</Link>
        <Link to="/dashboard/ApprovedContactRequest">
          Approved Contact Request
        </Link>

        <Link onClick={handleLogout}>Logout</Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
