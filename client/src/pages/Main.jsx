import React from "react";
import SideTopic from "../components/SideTopic";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <section className="hidden md:block ml-[25%] bg-midnight w-[55%] min-h-screen text-white">
        <Outlet />
      </section>

      {/* this is when small screen  */}
      <section className="md:hidden bg-midnight  min-h-screen text-white">
        <div>
          <h1 className="py-4 px-5 text-2xl font-semibold">AlgoTalk</h1>

          <div
            className="h-[93vh] overflow-y-scroll pb-16"
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
      </section>
    </>
  );
};

export default Main;
