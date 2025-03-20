import React from "react";
import { Outlet } from "react-router-dom";
import SideNavBar from "../components/SideNavBar";
import BottomNavBar from "../components/BottomNavBar";
import Notifications from "../components/Notifications";

const Main = () => {
  return (
    <>
      <section className="hidden md:flex">
        <SideNavBar />
        <Outlet />
        <Notifications />
      </section>
      <section className="md:hidden bg-midnight text-white">
        <Outlet />
        <BottomNavBar />
      </section>
    </>
  );
};

export default Main;
