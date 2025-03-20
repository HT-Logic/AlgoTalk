import React from "react";
import { Outlet } from "react-router-dom";
import SideNavBar from "../components/SideNavBar";
import Notification from "../components/Notification";
import BottomNavBar from "../components/BottomNavBar";

const Main = () => {
  return (
    <>
      <section className="hidden md:flex">
        <SideNavBar />
        <Outlet />
        <Notification />
      </section>
      <section className="md:hidden">
        <Outlet />
        <BottomNavBar />
      </section>
    </>
  );
};

export default Main;
