import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Button, Label, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const { signupUser } = useContext(AuthContext);
  const [error, setError] = useState();
  const [UserSuccess, setUserSuccess] = useState();

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, photo, name);
    if (!/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)) {
      toast(
        "Minimum six characters, at least one capital letter and one special character"
      );
      return;
    }
    setError("");
    signupUser(email, password)
      .then((result) => {
        console.log(result.user);
        setUserSuccess(result.user);
        if (result.user) {
          toast("User Create successfully");
        }
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => console.log("Profile updated successfully"))
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
    if (error) {
      toast(error);
    }
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-center items-center">
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <motion.div
        initial={{ x: "-100vh" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", duration: 1, stiffness: 60 }}
        className="flex-1 lg:ml-3 lg:px-10 lg:py-20 justify-center items-center   rounded-lg "
      >
        <h1 className="text-3xl text-center text-[#522b79] font-extrabold">
          Sign Up
        </h1>
        <form onSubmit={handleSignUp} className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your name" />
            </div>
            <TextInput
              name="name"
              id="name"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>

            <TextInput
              id="email1"
              type="email"
              placeholder="Your email"
              name="email"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              name="password"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="photo" value="Photo Url" />
            </div>
            <TextInput
              name="photo"
              id="photo"
              type="text"
              placeholder="Photo Url"
              required
            />
          </div>
          <Button type="submit" className="bg-[#522b79]">
            Sign Up
          </Button>
        </form>
        <hr className="w-3/4 mt-2" />

        <div className="flex gap-4 mt-2">
          <h1>Already an Account?</h1>
          <Link to="/login" className="text-sky-500">
            Log in
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: "100vh" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", duration: 1, stiffness: 60 }}
        className="flex-1"
      >
        <img src="https://i.ibb.co/6n4rGY5/sign-up.gif" />
      </motion.div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default SignUp;
