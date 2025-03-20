import React from "react";
import SideTopic from "../components/SideTopic";

const Main = () => {
  return (
    <>
      <section className="hidden md:block bg-midnight w-[55%] min-h-screen text-white">
        Main
      </section>

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
