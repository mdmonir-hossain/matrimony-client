import { useQuery } from "@tanstack/react-query";
import { Button, Label, Select, Spinner } from "flowbite-react";
import React, { useEffect, useState } from "react";
import Biodatas from "../Biodatas/Biodatas";

const AllbioDatas = () => {
  const [asc, setAsc] = useState(true);
  const [Male, setMale] = useState(true);
  const [selectedDivision, setSelectedDivision] = useState('');
  const [allbiodatas, setAllbiodatas] = useState([]);
  const handleDivisionChange = (event) => {
    setSelectedDivision(event.target.value);
  }

  console.log(selectedDivision);
  // const { isPending, data,refetch  } = useQuery({
  //   queryKey: ["allbiodatas"],
  //   queryFn: async () => {
  //     const res = await fetch(
  //       `https://b8a12-server-side-six.vercel.app/allbiodatas?sort=${asc ? 'asc' : 'desc'}`
  //     );
  //     return res.json();
  
  //   },
  // });

  // if (isPending) {
  //   return <Spinner aria-label="Default status example" />;
  // }

  useEffect(() => {
    fetch(
      `https://b8a12-server-side-six.vercel.app/allbiodatas?sort=${
        asc ? "asc" : "desc"
      }&gender=${Male ? "Male" : "Female"}&division=${selectedDivision}`
    )
      .then((res) => res.json())
      .then((data) => setAllbiodatas(data));
  }, [asc, Male, selectedDivision]);
  return (
    <div className="flex">
      <div className="w-full  lg:w-[200px] bg-[#522b79] min-h-screen">
        <h1 className="text-white text-center text-3xl"> Filter</h1>

        <hr />
        <div className="flex flex-col gap-3">
          <Button onClick={() => setAsc(!asc)}>
            {asc ? "Age: High to Low " : "Age: Low to High"}{" "}
          </Button>
          <Button onClick={() => setMale(!Male)}>
            {Male ? "Male " : "Female"}{" "}
          </Button>
          <div className="max-w-md">
            <div className="mb-2 block text-white">
              <Label
                htmlFor="division"
                className="text-white"
                value="Filter by division "
              />
            </div>
            <Select id="division" onChange={handleDivisionChange} required>
              <option value="">ALL</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chattogram">Chattogram</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Barisal">Barisal</option>
              <option value="Khulna">Khulna</option>
              <option value="Maymansign">Maymansign</option>
              <option value="Sylhet">Sylhet</option>
            </Select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1   lg:grid-cols-3 md:grid-cols-2 mt-10 gap-5">
        {allbiodatas?.map((allbio) => (
          <Biodatas allbio={allbio}></Biodatas>
        ))}
      </div>
    </div>
  );
};

export default AllbioDatas;
