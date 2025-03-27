import React from "react";
import ChatText from "./ChatText";

const ChatMessage = () => {
  return (
    <div className="flex items-end gap-2">
      <img src="/Hurricane.jpg" alt="" className="w-8 rounded-full" />
      <ChatText />
    </div>
  );
};

export default ChatMessage;
