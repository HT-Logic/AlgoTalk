import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="w-full h-16 px-8 bg-primary text-midnight flex justify-between items-center fixed">
      <div className="text-2xl font-semibold">AlgoTalk</div>

      <div className="flex gap-4">
        {/* <NavLink to="/about">About</NavLink> */}
        <NavLink
          to="/sign-in"
          className="border-2 border-midnight rounded-full font-semibold px-4 py-2 hover:bg-midnight hover:text-white transition-colors duration-150"
        >
          Sign In
        </NavLink>
      </div>
    </section>
  );
};

export default Navbar;
