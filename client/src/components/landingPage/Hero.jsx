import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-16 pt-20 px-8 bg-primary">
      <div className="bg-midnight text-white rounded-4xl h-[80vh] flex">
        <div className="p-20 w-1/2 flex flex-col justify-between">
          <div className="pt-24 mb-8 text-6xl font-semibold text-primary">
            AlgoTalk
          </div>
          <div className="pl-32 mb-8 text-6xl font-semibold">
            Chat, Discuss, and
          </div>
          <div className="pl-80 mb-8 text-6xl font-semibold">
            Learn Together!
          </div>

          <div className="text-2xl mt-40 flex items-center gap-4">
            <div className="underline underline-offset-4">
              Join the Room Today!{" "}
            </div>
            <Link className="cursor-crosshair border-2 border-primary rounded-full font-semibold px-4 py-2 hover:bg-primary hover:text-white transition-colors duration-150">
              Sign Up Now
            </Link>
          </div>
        </div>
        <div className="w-1/2 p-20">
          <div className="bg-gray-300 text-black rounded-3xl h-full flex justify-center items-center">
            Image
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
