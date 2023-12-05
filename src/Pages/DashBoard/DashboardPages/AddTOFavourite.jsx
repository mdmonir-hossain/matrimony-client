import React from 'react';

const AddTOFavourite = ({ addfavourite }) => {
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
    } = addfavourite;
    return <div>{BiodataId}</div>;
};

export default AddTOFavourite;