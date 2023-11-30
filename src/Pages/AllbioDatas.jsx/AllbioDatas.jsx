import { useQuery } from "@tanstack/react-query";
import { Spinner } from "flowbite-react";
import React from "react";
import Biodatas from "../Biodatas/Biodatas";

const AllbioDatas = () => {
  const { isPending, data } = useQuery({
    queryKey: ["allbiodatas"],
    queryFn: async () => {
      const res = await fetch(
        "https://b8a12-server-side-six.vercel.app/allbiodatas"
      );
      return res.json();
    },
  });

  if (isPending) {
    return <Spinner aria-label="Default status example" />;
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-10 gap-5">
      {data.map((allbio) => (
        <Biodatas allbio={allbio}></Biodatas>
      ))}
    </div>
  );
};

export default AllbioDatas;
