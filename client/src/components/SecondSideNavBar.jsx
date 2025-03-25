import React from "react";
import { Link } from "react-router-dom";

const SecondSideNavBar = ({ isOpen, handleClose }) => {
  const translate =
    isOpen === false ? "-translate-x-60" : "translate-x-0 w-full";

  return (
    <section className={`fixed z-20 flex h-screen text-midnight  ${translate}`}>
      <div className="bg-primary w-[15%] p-10">
        <div>
          <img
            src="../src/assets/Hurricane.jpg"
            alt="pfp"
            className="w-20 h-20 rounded-full"
          />
          <p className="mt-4 text-xl font-semibold">Htet Aung Lwin</p>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <Link to={"/home/pc/setting"}>My profile</Link>
          <Link>Explore</Link>
          <Link>Log Out</Link>
        </div>
      </div>
      <button
        className="bg-midnight opacity-40 w-full"
        onClick={() => handleClose(false)}
      ></button>
    </section>
  );
};

export default SecondSideNavBar;
