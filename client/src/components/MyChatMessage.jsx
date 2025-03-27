import React from "react";
import ChatText from "./ChatText";

const MyChatMessage = () => {
  return (
    <div className="flex justify-end items-end gap-2">
      <ChatText />
      <img src="/Hurricane.jpg" alt="" className="w-8 rounded-full" />
    </div>
  );
};

export default MyChatMessage;
