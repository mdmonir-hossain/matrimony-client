import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
    
  return (
    <div>
      <div className="bg-[#522b79] w-[300px] min-h-screen flex flex-col text-white gap-4 p-4">
        <h1 className=" text-white text-3xl ">Admin DashBoard</h1>
        <hr />
        <Link>Admin Dashboard</Link>
        <Link>Manage Users </Link>
        <Link>Approved Premium</Link>
        <Link>Approved Contact Request</Link>

        <Link>Logout</Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
