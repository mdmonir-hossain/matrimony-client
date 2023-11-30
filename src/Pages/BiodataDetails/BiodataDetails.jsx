import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SinglebiodataDetails from '../Biodatas/SinglebiodataDetails';

const BiodataDetails = () => {
    const selectedCard = useLoaderData();
    const [detailsid, setDetails] = useState([]);
    const { _id } = useParams();
    const detailsData = useLoaderData([]);
    useEffect(() => {
      const singlecard = selectedCard?.find(
        (singleDetails) => singleDetails._id === _id
      );
      setDetails(singlecard);
    }, [_id, detailsData]);
    console.log(detailsid);
    return (
      <div>
        <SinglebiodataDetails detailsid={detailsid}></SinglebiodataDetails>
      </div>
    );
};

export default BiodataDetails;