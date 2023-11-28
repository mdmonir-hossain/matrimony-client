import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Button, Label, TextInput } from "flowbite-react";

const SignUp = () => {
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
        <form className="flex max-w-md flex-col gap-4">
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
    </div>
  );
};

export default SignUp;
