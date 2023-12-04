import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import ViewbioPage from "./viewbioPage";


const ViewBiodata = () => {
    const { user } = useContext(AuthContext);
    const [view, setView] = useState();
    const [viewDetails, setViewDetails] = useState([]);
    const url = `https://b8a12-server-side-six.vercel.app/viewbiodatas?email:${user.email}`;
    // const url = `http://localhost:5000/viewbiodatas`;

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setView(data));
    }, [url]);

    useEffect(() => {
      const viewBiodata = view?.find(biodata => biodata.userEmail === user.email
      );
      setViewDetails(viewBiodata);
    }, [user.email,view]);
    
    console.log(viewDetails);
    return (
      <div>
        {viewDetails?.map((view) => (
          <ViewbioPage view={view}></ViewbioPage>
        ))}
      </div>
    );
};

export default ViewBiodata;