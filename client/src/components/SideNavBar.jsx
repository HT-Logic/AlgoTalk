import React, { useState } from "react";
import { AlignJustify } from "lucide-react";
import SideTopic from "./SideTopic";
import SecondSideNavBar from "../components/SecondSideNavBar";
import { Link } from "react-router-dom";

const SideNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = (e) => {
    setIsOpen(e);
  };

  return (
    <section className="bg-night w-[25%] h-screen text-white overflow-hidden fixed">
      <div className="flex">
        {/* dr ka humbager  */}
        <div className="pt-5 w-52 bg-primary flex justify-center">
          <AlignJustify
            className="cursor-pointer"
            color="black"
            onClick={() => setIsOpen(true)}
          />
        </div>
        {/* dr ka humbager  */}
        <SecondSideNavBar isOpen={isOpen} handleClose={handleClose} />
        {/* dr ka SideNavBar */}
        <div>
          <Link to={"/home/pc"}>
            <h1 className="pt-4 px-5 text-2xl font-semibold">AlgoTalk</h1>
          </Link>

          <div
            className="mt-8 h-[93vh] overflow-y-scroll"
            // to hide scroll bar
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <SideTopic />
            <SideTopic />
            <SideTopic />
            <SideTopic />
            <SideTopic />
            <SideTopic />
            <SideTopic />
            <SideTopic />
          </div>
        </div>
        {/* dr ka SideNavBar */}
      </div>
    </section>
  );
};

export default SideNavBar;
