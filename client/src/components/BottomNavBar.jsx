import { Eye, MessageSquareMore, Settings2 } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const BottomNavBar = () => {
  return (
    <section className="bg-night fixed text-white z-10 bottom-0 w-full flex justify-around py-4">
      <NavLink to={"/explore"}>
        <Eye />
      </NavLink>
      <NavLink to={"/"}>
        <MessageSquareMore />
      </NavLink>
      <NavLink to={"/setting"}>
        <Settings2 />
      </NavLink>
    </section>
  );
};

export default BottomNavBar;
