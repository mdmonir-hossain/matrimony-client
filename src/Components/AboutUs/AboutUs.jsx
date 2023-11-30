import { Link} from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Button, Label, TextInput } from "flowbite-react";




const AboutUs = () => {
   


    
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-center items-center">
        <Helmet>
          <title> About Us </title>
        </Helmet>
        <motion.div
          initial={{ x: "-100vh" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 1, stiffness: 60 }}
          className="flex-1 lg:ml-3 lg:px-10 lg:py-20 justify-center items-center   rounded-lg "
        >
          <h1 className="text-3xl text-center text-[#522b79] font-extrabold">
            About US
                  </h1>
                  <hr/>
          <p>
            "Welcome to EVERLASTING TIES, where heartfelt connections flourish.
            Our platform is designed with a simple yet profound belief: that
            every person deserves genuine and meaningful companionship. At
            EVERLASTING TIES, we understand that the search for a life partner
            is a deeply personal journey. That’s why we've crafted a space that
            prioritizes authenticity, respect, and the sanctity of
            relationships. Our mission is to bring together individuals seeking
            more than just a superficial match. We believe in fostering
            connections based on shared values, interests, and aspirations.
            Whether you're looking for a lifelong commitment or a fulfilling
            companionship, we're dedicated to helping you find someone who
            resonates with your essence. What sets us apart is our commitment to
            creating a secure and respectful environment. Our stringent
            verification processes and vigilant moderation ensure a safe space
            for you to explore and connect without compromising your privacy or
            security. Join our vibrant community of individuals looking for that
            special someone. Let us be your companion on this beautiful journey
            towards finding love and companionship.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: "100vh" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 1, stiffness: 60 }}
          className="flex-1"
        >
          <img src="https://i.ibb.co/jJ6nC6v/1.jpg" />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
