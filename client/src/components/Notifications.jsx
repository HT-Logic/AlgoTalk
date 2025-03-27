import React from "react";
import NotificationMessage from "./NotificationMessage";
import { Bell } from "lucide-react";

const Notifications = () => {
  return (
    <section className="bg-night w-[15%] min-h-screen text-white">
      <div className="mt-5  pt-4 w-full rounded-xl">
        <div className="text-2xl font-semibold mb-4 flex items-center gap-4 px-6 ">
          <Bell /> Notification
        </div>
        <NotificationMessage />
        <NotificationMessage />
        <NotificationMessage />
      </div>
    </section>
  );
};

export default Notifications;
