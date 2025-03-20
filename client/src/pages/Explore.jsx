import React from "react";
import Topic from "../components/Topic";

const Explore = () => {
  return (
    <section className=" w-[90%] mx-auto mt-10">
      <div className="mb-10 text-2xl font-semibold">Explore</div>
      <div className=" grid grid-cols-2 gap-8 gap-y-12">
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
      </div>
    </section>
  );
};

export default Explore;
