import React from "react";
import Topic from "../components/Topic";
import { Search } from "lucide-react";

const Explore = () => {
  return (
    <section className="w-[90%] mx-auto md:mt-4 pb-20 md:pb-0">
      {/* search bar div  */}
      <div className="flex justify-center items-center gap-4 pt-4">
        <input
          type="search"
          className="border-2 border-night w-full rounded-full px-4 py-2 outline-primary focus:outline-2"
          placeholder="search topic"
        />
        <button className="cursor-pointer">
          <Search className="text-primary" />
        </button>
      </div>
      {/* search bar div  */}
      <div className="my-10 text-2xl md:text-4xl font-semibold">Explore</div>
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
