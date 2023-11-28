
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Button, Label, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";

const Login = () => {
    const [error, setError] = useState();
    const location = useLocation();
    const navigate = useNavigate();
    const { auth, googleProvider, loginUser, user } = useContext(AuthContext);

const handleSignin = (event) => {
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;
  loginUser(email, password)
    .then((result) => {
      console.log(result.user);
      navigate(location?.state ? location.state : "/");
      if (result.user) {
        toast(` Dear ${result.user} , you Login successfully`);
      }
    })
    .catch((error) => {
      setError(error.message);
      if (error) {
        toast("Email or Password does not match.");
      }
    });
};

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
          .then((result) => {
            const user = result.user;
            console.log(user);
          })
          .catch((error) => {
            console.log(error.message);
          });
    }
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-center items-center">
        <Helmet>
          <title> Log in </title>
        </Helmet>
        <motion.div
          initial={{ x: "-100vh" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 1, stiffness: 60 }}
          className="flex-1 lg:ml-3 lg:px-10 lg:py-20 justify-center items-center   rounded-lg "
        >
          <h1 className="text-3xl text-center text-[#522b79] font-extrabold">
            Log In
          </h1>
          <form
            onSubmit={handleSignin}
            className="flex max-w-md flex-col gap-4"
          >
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
              Log in
            </Button>
          </form>
          <hr className="w-3/4 mt-2" />
          <div className="w-3/4  gap-4 mt-2">
            <Button
              onClick={handleGoogleLogin}
              className="btn w-full"
              color="gray"
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                  clip-rule="evenodd"
                />
              </svg>
            </Button>
          </div>
          <div className="flex gap-4 mt-2">
            <h1>Don't have an Account?</h1>
            <Link to="/SignUp" className="text-sky-500">
              Sign UP
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "100vh" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 1, stiffness: 60 }}
          className="flex-1"
        >
          <img src="https://i.ibb.co/XxfdqtN/log-in.gif" />
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
