import React from "react";
import Topic from "../components/Topic";

const Explore = () => {
  return (
    <section className="w-[90%] mx-auto md:mt-4 pb-20 md:pb-0 pt-8">
      <div className="mb-10 text-2xl font-semibold">Explore</div>
      <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-8 md:gap-y-12">
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
