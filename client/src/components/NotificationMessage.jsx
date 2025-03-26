import React from "react";

const NotificationMessage = () => {
  return (
    <section className="flex justify-center items-center gap-4 py-4">
      <img
        src="/Hurricane.jpg"
        alt=""
        className="h-16 object-cover rounded-full"
      />
      <div>
        <p>
          <span className="font-semibold">Hurricane</span> mention you in the
          React Topic!
        </p>
      </div>
    </section>
  );
};

export default NotificationMessage;
