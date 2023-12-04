import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SinglebiodataDetails from '../Biodatas/SinglebiodataDetails';
import AllbioDatas from '../AllbioDatas.jsx/AllbioDatas';
import MatchBiodatas from '../Biodatas/MatchBiodatas';

const BiodataDetails = () => {
    const selectedCard = useLoaderData();
    const [detailsid, setDetails] = useState([]);
    const [type, setType] = useState([]);
    const { _id } = useParams();
    const detailsData = useLoaderData([]);
    useEffect(() => {
      const singlecard = selectedCard?.find(
        (singleDetails) => singleDetails._id === _id
      );
      setDetails(singlecard);
    }, [_id, detailsData]);
  
    // useEffect(() => {
    //   const typecard = selectedCard?.filter(
    //     (typematch) => typematch.BiodataType === BiodataType;
    //   );
    //   setType(typecard);
    // }, [_id]);
    console.log(detailsData);
    return (
      <div className="flex flex-wrap">
        <div>
          <SinglebiodataDetails detailsid={detailsid}></SinglebiodataDetails>
        </div>
        <div className="lg:w-2 bg-[#522b79] min-h-screen"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 ml-10">
          {detailsData.map((match) => (
            <MatchBiodatas match={match}></MatchBiodatas>
          ))}
        </div>
      </div>
    );
};

export default BiodataDetails;