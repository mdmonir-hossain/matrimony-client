import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const NormalUserDshBoard = () => {
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
      <div className="bg-[rgb(82,43,121)] w-[300px] min-h-screen flex flex-col text-white gap-4 p-4">
        <div className="flex justify-between">
          <h1 className=" text-white text-xl ">User DashBoard</h1>
          
          <Link to="/" className=" text-white text-xl ">
            Home
          </Link>
        </div>
        <hr />
        <Link to="/dashboard/editbiodata">Edit Biodata</Link>
        <Link to="/dashboard/viewbiodata">View Biodata</Link>
        <Link to="/dashboard/requestbiodata">My Contact Request</Link>
        <Link to="/dashboard/favouritesbiodata">Favourites Biodata</Link>
        <Link onClick={handleLogout}>Logout</Link>
      </div>
    </div>
  );
};

export default NormalUserDshBoard;
