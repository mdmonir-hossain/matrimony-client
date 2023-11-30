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
      <div className="bg-[#522b79] w-[300px] min-h-screen flex flex-col text-white gap-4 p-4">
        <Link to='/editbiodata'>Edit Biodata</Link>
        <Link>View Biodata</Link>
        <Link>My Contact Request</Link>
        <Link>My Contact Request.</Link>
        <Link>Favourites Biodata</Link>
        <Link onClick={handleLogout}>Logout</Link>
      </div>
    </div>
  );
};

export default NormalUserDshBoard;
