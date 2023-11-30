import React from 'react';
import { Link } from 'react-router-dom';

const NormalUserDshBoard = () => {
    return (
      <div>
        <div className="bg-[#522b79] w-[300px] min-h-screen flex flex-col text-white gap-4 p-4">
          <Link>
            Edit Biodata
          </Link>
          <Link>View Biodata</Link>
          <Link>My Contact Request</Link>
          <Link>My Contact Request.</Link>
          <Link>Favourites Biodata</Link>
          <Link>Logout</Link>
        </div>
      </div>
    );
};

export default NormalUserDshBoard;