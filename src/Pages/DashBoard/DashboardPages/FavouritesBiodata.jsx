import { useContext, useEffect } from "react";
import { useState } from "react";

import { useLoaderData } from "react-router-dom";

import { AuthContext } from "../../../Provider/AuthProvider";
import AddTOFavourite from "./AddTOFavourite";

const FavouritesBiodata = () => {
  const [favourite, setFavourite] = useState([]);

    const { user } = useContext(AuthContext);

    const favouritesBiodata = useLoaderData([]);
    

  useEffect(() => {
    const favouritebio = favouritesBiodata.filter(fav => fav.email === user.email
    );
    setFavourite(favouritebio);
  }, [favouritesBiodata, user.email]);

  console.log(favourite);
  return (
    <div>
      <div>
        {favourite.length ? (
          ""
        ) : (
          <div>
            <h1 className="text-center text-3xl font-bold mt-10 text-red-600">
              No Data Found
            </h1>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mb-10 min-h-screen">
        {favourite?.map((addfavourite) => (
          <AddTOFavourite
            key={addfavourite._id}
            addfavourite={addfavourite}
          ></AddTOFavourite>
        ))}
      </div>
    </div>
  );
};

export default FavouritesBiodata;
