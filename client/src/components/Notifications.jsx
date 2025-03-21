import React from "react";
import NotificationMessage from "./NotificationMessage";
import { Bell } from "lucide-react";

const Notifications = () => {
  return (
    <section className="bg-midnight w-[20%] min-h-screen text-white">
      <div className="mt-5 bg-night px-6 pt-4 w-[90%] rounded-xl">
        <div className="text-2xl font-semibold mb-4 flex items-center gap-4">
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
