import { Helmet } from "react-helmet";
import {
  Button,
  Label,
  TextInput,
  Select,
  Datepicker,
  Spinner,
} from "flowbite-react";
import { motion } from "framer-motion";
import { useContext } from "react";

import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const EditBiodata = () => {
  const { user } = useContext(AuthContext);

  const { isPending, data: biodataId } = useQuery({
    queryKey: ["biodataId"],
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
  const biodata_Id = biodataId?.length + 1;

  const handleEditBiodata = (event) => {
    event.preventDefault();
    const form = event.target;
    const BiodataType = form.BiodataType.value;
    const Weight = form.Weight.value;
    const height = form.height.value;
    const Age = form.Age.value;
    const Occupation = form.Occupation.value;
    const FathersName = form.FathersName.value;
    const MothersName = form.MothersName.value;
    const PermanentAddress = form.PermanentAddress.value;
    const presentAddress = form.presentAddress.value;
    const Race = form.Race.value;
    const ExpectedPartnerAge = form.ExpectedPartnerAge.value;
    const ExpectedPartnerHeight = form.ExpectedPartnerHeigth.value;
    const ExpectedPartnerWeight = form.ExpectedPartnerweight.value;
    const mobile = form.mobile.value;
    const birth = form.birth.value;

    const biodataData = {
      biodataDataId: biodata_Id,
      BiodataType,
      Weight,
      height,
      Age,
      Occupation,
      FathersName,
      MothersName,
      PermanentAddress,
      presentAddress,
      Race,
      ExpectedPartnerAge,
      ExpectedPartnerHeight,
      ExpectedPartnerWeight,
        mobile,
      birth,
      userEmail: user?.email || "",
      userName: user?.displayName || "",
      userImage: user?.photoURL || "",
      AccountType: "Normal",
      MarriageCompleted: "No",
      Reviews: "",
    };
    console.log(biodataData);
    axios
      .post("https://b8a12-server-side-six.vercel.app/allbiodatas", biodataData)
      .then((data) => {
        if (data.data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "BioData Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-center items-center">
      <Helmet>
        <title> Edit Biodata</title>
      </Helmet>

      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 60 }}
        className="flex-1 lg:ml-3 lg:px-10 lg:py-20 justify-center items-center  rounded-lg "
      >
        <h1 className="text-3xl text-center">Edit Biodata</h1>
        <form
          onSubmit={handleEditBiodata}
          className="flex max-w-md flex-col gap-4"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="BiodataType" value="Biodata Type" />
              </div>
              <Select id="BiodataType" name="BiodataType" required>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Select>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Name" />
              </div>
              <TextInput
                name="Name"
                id="Name"
                type="text"
                placeholder="Name"
                defaultValue={user.displayName}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="image" value="image" />
              </div>
              <TextInput
                name="image"
                id="image"
                type="text"
                placeholder="image"
                defaultValue={user.photoURL}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="weight" value="birth" />
              </div>
              <TextInput
                id="birth"
                type="date"
                placeholder="birth"
                name="birth"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="height" value="height" />
              </div>
              <TextInput
                name="height"
                id="height"
                type="text"
                placeholder="Height"
                required
              />
              {/* <Datepicker name="expiredDate" /> */}
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="weight" value="weight" />
              </div>
              <TextInput
                id="weight"
                type="text"
                placeholder="Weight"
                name="Weight"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Age" value="Age" />
              </div>
              <TextInput
                name="Age"
                id="Age"
                type="text"
                placeholder="Age"
                required
              />
              {/* <Datepicker name="expiredDate" /> */}
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Occupation " value="Occupation" />
              </div>
              <TextInput
                id="Occupation"
                type="Occupation"
                placeholder="Occupation"
                name="Occupation"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Race" value="Race" />
              </div>
              <Select id="Race" name="Race" required>
                <option value="fair">Fair</option>
                <option value="light">light</option>
                <option value="medium">medium</option>
                <option value="dark">dark</option>
              </Select>
              {/* <Datepicker name="expiredDate" /> */}
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Occupation " value="Occupation" />
              </div>
              <TextInput
                id="Occupation"
                type="Occupation"
                placeholder="Occupation"
                name="Occupation"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="FathersName" value="Father's Name" />
              </div>
              <TextInput
                id="FathersName"
                type="FathersName"
                placeholder="FathersName"
                name="FathersName"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="MothersName " value="MothersName" />
              </div>
              <TextInput
                id="MothersName"
                type="MothersName"
                placeholder="MothersName"
                name="MothersName"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="PermanentAddress" value="Permanent Divition" />
              </div>
              <Select id="PermanentAddress" name="PermanentAddress">
                <option value="Dhaka">Dhaka</option>
                <option value="Chaagram">Rangpur</option>
                <option value="Barisal">Barisal</option>
                <option value="Khulna">Khulna</option>
                <option value="Maymansign">Maymansign</option>
                <option value="Maymansign">Maymansign</option>
              </Select>
              {/* <Datepicker name="expiredDate" /> */}
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="presentAddress " value="presentAddress" />
              </div>
              <Select id="presentAddress" name="presentAddress">
                <option value="Dhaka">Dhaka</option>
                <option value="Chaagram">Rangpur</option>
                <option value="Barisal">Barisal</option>
                <option value="Khulna">Khulna</option>
                <option value="Maymansign">Maymansign</option>
                <option value="Maymansign">Maymansign</option>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2">
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="ExpectedPartnerAge"
                  value="ExpectedPartnerAge"
                />
              </div>

              <TextInput
                id="ExpectedPartnerAge"
                type="ExpectedPartnerAge"
                placeholder="Expected Partner Age"
                name="ExpectedPartnerAge"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="ExpectedPartnerHeigth"
                  value="ExpectedPartnerHeigth"
                />
              </div>
              <TextInput
                id="ExpectedPartnerHeigth"
                type="ExpectedPartnerHeigth"
                placeholder="ExpectedPartnerHeigth"
                name="ExpectedPartnerHeigth"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2">
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="ExpectedPartnerweight"
                  value="ExpectedPartnerweight"
                />
              </div>

              <TextInput
                id="ExpectedPartnerweight"
                type="ExpectedPartnerweight"
                placeholder="ExpectedPartnerweight"
                name="ExpectedPartnerweight"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="ExpectedPartnerHeigth"
                  value="ExpectedPartnerHeigth"
                />
              </div>
              <TextInput
                id="ExpectedPartnerHeigth"
                type="ExpectedPartnerHeigth"
                placeholder="ExpectedPartnerHeigth"
                name="ExpectedPartnerHeigth"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="email" />
              </div>

              <TextInput
                id="email"
                type="email"
                placeholder="email"
                defaultValue={user.email}
                name="email"
                readOnly
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="mobile" value="mobile" />
              </div>
              <TextInput
                id="mobile"
                type="mobile"
                placeholder="mobile"
                name="mobile"
                required
              />
            </div>
          </div>
          <Button type="submit">Edit Biodata</Button>
        </form>
      </motion.div>
    </div>
  );
};

export default EditBiodata;
