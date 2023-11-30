import { Card } from 'flowbite-react';


const SinglebiodataDetails = ({ detailsid }) => {
  const {
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
  } = detailsid;
  return (
    <div>
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

          <div className="mt-4 flex space-x-3 lg:mt-6">
            <div>Date Of Birth: {DateOfBirth} </div>
            <div>Height: {Height}</div>
          </div>
          <div className="mt-4 flex space-x-3 lg:mt-6">
            <div>Fathers Name: {FathersName} </div>
            <div>Mothers Name: {MothersName}</div>
          </div>
          <div className="mt-4 flex space-x-3 lg:mt-6">
            <div>Weight: {Weight} </div>
            <div>ExpectedPartnerAge: {ExpectedPartnerAge}</div>
          </div>
          <div className="mt-4 flex space-x-3 lg:mt-6">
            <div>Permanent Division: {PermanentDivisionName} </div>
            <div>Height: : {ExpectedPartnerHeight }</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SinglebiodataDetails;