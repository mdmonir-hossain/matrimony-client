import { Link} from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Button, Label, TextInput, Textarea } from "flowbite-react";




const ContactUs = () => {
   


    
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-center items-center">
        <Helmet>
          <title> Contact Us </title>
        </Helmet>
        <motion.div
          initial={{ x: "-100vh" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 1, stiffness: 60 }}
          className="flex-1 lg:ml-3 lg:px-10 lg:py-20 justify-center items-center   rounded-lg "
        >
          <h1 className="text-3xl text-center text-[#522b79] font-extrabold">
            Contact Us
          </h1>
          <hr />
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
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Your message" />
              </div>
              <Textarea
                id="comment"
                placeholder="Leave a comment..."
                required
                rows={4}
              />
            </div>
            <Button type="submit" className="bg-[#522b79]">
              Submit
            </Button>
          </form>
        </motion.div>
        <motion.div
          initial={{ x: "100vh" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 1, stiffness: 60 }}
          className="flex-1"
        >
          <img src="https://i.ibb.co/PTkZG18/2.jpg" />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
