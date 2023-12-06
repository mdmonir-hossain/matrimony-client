import { useContext, useEffect } from "react";
import { useState } from "react";
import { Table } from "flowbite-react";
import { useLoaderData } from "react-router-dom";

import { AuthContext } from "../../../Provider/AuthProvider";
import AddTOFavourite from "./AddTOFavourite";

const FavouritesBiodata = () => {
  const [favourite, setFavourite] = useState([]);

  const { user } = useContext(AuthContext);

  const favouritesBiodata = useLoaderData([]);

  useEffect(() => {
    const favouritebio = favouritesBiodata.filter(
      (fav) => fav.email === user.email
    );
    setFavourite(favouritebio);
  }, [favouritesBiodata, user.email]);

  console.log(favourite);
  return (
    <div>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Biodata Id</Table.HeadCell>
            <Table.HeadCell>Permanent Address</Table.HeadCell>
            <Table.HeadCell> Occupation</Table.HeadCell>
            <Table.HeadCell> Delete</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {favourite?.map((addfavourite) => (
              <AddTOFavourite
                key={addfavourite._id}
                addfavourite={addfavourite}
              ></AddTOFavourite>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default FavouritesBiodata;
