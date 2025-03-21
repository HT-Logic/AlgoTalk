import React from "react";
import SideTopic from "../components/SideTopic";
import { Search } from "lucide-react";
import Explore from "./Explore";

const Main = () => {
  return (
    <>
      <section className="hidden md:block ml-[25%] bg-midnight w-[55%] min-h-screen text-white">
        {/* search bar div  */}
        <div className="flex justify-center items-center gap-4 mt-5">
          <input
            type="search"
            className="border-2 border-night w-[70%] rounded-full px-4 py-2 outline-primary focus:outline-2"
            placeholder="search topic"
          />
          <button className="cursor-pointer">
            <Search className="text-primary" />
          </button>
        </div>
        {/* search bar div  */}
        <Explore />
      </section>

      {/* this is when small screen  */}
      <section className="md:hidden bg-midnight  min-h-screen text-white">
        <div>
          <h1 className="py-4 px-5 text-2xl font-semibold">AlgoTalk</h1>

          <div
            className="h-[93vh] overflow-y-scroll"
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
      </section>
    </>
  );
};

export default Main;
