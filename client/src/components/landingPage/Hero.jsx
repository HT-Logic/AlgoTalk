import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-16 pt-20 px-8 bg-primary">
      <div className="bg-midnight text-white rounded-4xl h-[80vh] flex">
        <div className="p-10 md:p-20 flex flex-col justify-center items-center w-full gap-20">
          <div className="text-5xl md:text-7xl font-semibold tracking-tighter">
            Real-Time Messaging, Real Connections
          </div>

          <div className="text-start md:text-xl text-neutral-500 md:w-[40%] md:text-center">
            Instant, secure, and fun—{" "}
            <span className="text-primary">AlgoTalk</span> is your go-to chat
            platform. Message friends and stay connected with ease!
          </div>

          <div className="md:text-2xl flex items-center gap-4">
            <div className="underline underline-offset-4">
              Join the Room Today!{" "}
            </div>
            <Link
              to={"/sign-up"}
              className="text-sm md:text-xl text-center cursor-cell text-midnight bg-primary rounded-full font-semibold px-4 py-2 hover:bg-secondary transition-colors duration-150"
            >
              Sign Up Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
