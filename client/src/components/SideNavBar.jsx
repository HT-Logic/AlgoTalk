import React from "react";
import { AlignJustify } from "lucide-react";
import SideTopic from "./SideTopic";

const SideNavBar = () => {
  return (
    <section className="bg-night w-[25%] h-screen text-white overflow-hidden">
      <div className="flex">
        {/* dr ka humbager  */}
        <div className="pt-5 w-52 bg-primary flex justify-center">
          <AlignJustify className="cursor-pointer" color="black" />
        </div>
        {/* dr ka humbager  */}

        {/* dr ka SideNavBar */}
        <div>
          <h1 className="pt-4 px-5 text-2xl font-semibold">AlgoTalk</h1>

          <div
            className="mt-4 h-[93vh] overflow-y-scroll"
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
