import { Avatar, Dropdown, Navbar } from "flowbite-react";

import { Link, NavLink } from "react-router-dom";

const Navber = () => {
  return (
    <div>
      <div className="shadow-lg fixed w-full ">
        <Navbar fluid rounded>
          <Navbar.Brand href="">
            <img
              src="https://i.ibb.co/Bw2wcPT/EVERLASTING-TIES.png"
              className="mr-3 h-6 sm:h-9"
              alt=""
            />
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline
              label={<Avatar alt="User settings" img="" rounded />}
            >
              <Dropdown.Header>
                <span className="block text-sm"></span>
                <span className="block truncate text-sm font-medium"></span>
              </Dropdown.Header>
              <Dropdown.Item className="bg-sky-500 text-white text-center hover:text-black p-2 rounded-lg">
                Sign out
              </Dropdown.Item>
            </Dropdown>

            <div>
              <Link
                to="/Login"
                className="bg-[#522b79]  hover:bg-[#e92f83] text-white p-2 rounded-lg"
              >
                Log in
              </Link>{" "}
              <Link
                to="/SignUP"
                className="bg-[#522b79]  hover:bg-[#e92f83] text-white p-2 rounded-lg"
              >
                Sign Up
              </Link>
            </div>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse className="text-[#522b79]">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-2 border-[#e92f83]"
                  : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/biodatas"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-2 border-[#e92f83]"
                  : ""
              }
            >
              Biodatas
            </NavLink>
            <NavLink
              to="/aboutus"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-2 border-[#e92f83]"
                  : ""
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contactus"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-2 border-[#e92f83]"
                  : ""
              }
            >
              Contact Us
            </NavLink>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};
export default Navber;
