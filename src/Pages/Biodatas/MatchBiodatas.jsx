import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";

const MatchBiodatas = ({ match }) => {
  const {
    _id,
    BiodataId,
    BiodataType,
    Name,
    ProfileImageLink,
    DateOfBirth,
    Height,
    Weight,
    Age,
    Occupation,
    Race,
    FathersName,
    MothersName,
    PermanentDivisionName,
    PresentDivisionName,
    ExpectedPartnerAge,
    ExpectedPartnerHeight,
    ExpectedPartnerWeight,
    ContactEmail,
    MobileNumber,
    AccountType,
    MarriageCompleted,
    Reviews,
  } = match;
  return (
    <div className="gap-5">
      <Card className="max-w-sm">
        <div className="flex justify-center gap-5 px-4 pt-4">
          <div> Biodata Id:{BiodataId}</div>
          <div>
            <img src={ProfileImageLink} className="w-12 rounded-full" />
          </div>
        </div>
        <div className="flex flex-col items-center pb-10">
          <div className="mt-4 flex space-x-3 lg:mt-6">
            <div>Name: {Name}</div>
            <div>Age: {Age}</div>
            <div>BiodataType: {BiodataType}</div>
          </div>
          <div className="mt-4 flex space-x-3 lg:mt-6">
            <div>Division: {PermanentDivisionName} </div>
            <div>Occupation: {Occupation}</div>
          </div>
        </div>
        <Link to={`/profileDetails/${_id}`}>
          <Button> Profile Details</Button>
        </Link>
      </Card>
    </div>
  );
};

export default MatchBiodatas;
