import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
const FooterSection = () => {
  return (
    <div>
      <Footer container className="bg-[#522b79] ">
        <div className="w-full text-center text-[#fff] ">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand
              href="/"
              src="https://i.ibb.co/981Z7jY/EVERLASTING-TIES-shadow.png"
              alt=" Logo"
              name=""
            />
            <Footer.LinkGroup className="text-[#fff]">
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between ">
            <Footer.Copyright
              className="text-[#fff]"
              href="#"
              by="EVERLASTING TIES"
              year={2023}
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center ">
              <Footer.Icon className="text-[#fff]" href="#" icon={BsFacebook} />
              <Footer.Icon className="text-[#fff]" href="#" icon={BsTwitter} />
              <Footer.Icon
                className="text-[#fff]"
                href="#"
                icon={BsInstagram}
              />
              <Footer.Icon className="text-[#fff]" href="#" icon={BsGithub} />
              <Footer.Icon className="text-[#fff]" href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default FooterSection;
