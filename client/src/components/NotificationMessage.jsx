import React from "react";
import { Link } from "react-router-dom";

const NotificationMessage = () => {
  return (
    <Link className="flex justify-center items-center gap-4 py-4 hover:bg-midnight px-6 ">
      <img
        src="/Hurricane.jpg"
        alt=""
        className="h-16 object-cover rounded-full"
      />
      <div>
        <p>
          <span className="font-semibold text-sm">Hurricane</span> mention you
          in the React Topic!
        </p>
      </div>
    </Link>
  );
};

export default NotificationMessage;
