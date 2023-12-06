import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
const GotMarried = () => {
  const { user } = useContext(AuthContext);
  const handleGotMarried = (event) => {
    event.preventDefault();
    const form = event.target;
    const PartnerBiodataNumber = form.PartnerBiodataNumber.value;
    const SelfBiodataNumber = form.SelfBiodataNumber.value;
    const review = form.review.value;
    const image = form.image.value;
    const marriageDate = form.marriageDate.value;
    const star = form.star.value;

    const reviewdata = {
      email: user?.email || "",
      image,
      SelfBiodataNumber,
      PartnerBiodataNumber,
      review,
      marriageDate,
      star,
    };
    axios
      .post("https://b8a12-server-side-six.vercel.app/reviews", reviewdata)
      .then((data) => {
        if (data.data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "review Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-center items-center">
        <Helmet>
          <title> Got Married</title>
        </Helmet>

        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 60 }}
          className="flex-1 lg:ml-3 lg:px-10 lg:py-20 justify-center items-center  rounded-lg "
        >
          <h1 className="text-3xl text-center">Got Married</h1>
          <form
            onSubmit={handleGotMarried}
            className="flex max-w-md flex-col gap-4"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2">
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="SelfBiodataNumber"
                    value="Self Biodata Number"
                  />
                </div>
                <TextInput
                  name="SelfBiodataNumber"
                  id="SelfBiodataNumber"
                  type="text"
                  placeholder="SelfBiodataNumber"
                  required
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="PartnerBiodataNumber"
                    value="Partner Biodata Number"
                  />
                </div>
                <TextInput
                  name="PartnerBiodataNumber"
                  id="PartnerBiodataNumber"
                  type="text"
                  placeholder="PartnerBiodataNumber"
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
                  required
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="marriageDate" value="marriageDate" />
                </div>
                <TextInput
                  name="marriageDate"
                  id="marriageDate"
                  type="date"
                  placeholder="marriageDate"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="star" value="star" />
                </div>
                <Select id="star" name="star" required>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 ">
              <div className="max-w-md">
                <div className="mb-2 block">
                  <Label htmlFor="comment" value="Your Review" />
                </div>
                <Textarea
                  id="comment"
                  placeholder="Review..."
                  name="review"
                  required
                  rows={5}
                />
              </div>
            </div>

            <Button type="submit">Submit</Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default GotMarried;
