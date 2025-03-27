import { Send } from "lucide-react";
import React, { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import MyChatMessage from "./MyChatMessage";

const ChatRoom = () => {
  const chatEndRef = useRef(null);

  // Scroll to the bottom when the component mounts
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section className="w-full h-screen pb-20 md:pb-0">
      <div className="py-5 text-2xl font-semibold px-8 mb-8">React</div>
      <div className="h-[89vh] flex flex-col">
        {/* Chat messages container */}
        <div
          className="h-[92%] max-h-[92%] px-8 py-4 flex flex-col gap-8 overflow-y-scroll"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Chat messages */}
          <ChatMessage />
          <ChatMessage />
          <MyChatMessage />
          <ChatMessage />
          <MyChatMessage />
          <ChatMessage />
          <ChatMessage />
          <MyChatMessage />
          <ChatMessage />
          <ChatMessage />
          <MyChatMessage />
          <MyChatMessage />
          <MyChatMessage />

          {/* Scroll to latest message */}
          <div ref={chatEndRef} />
        </div>

        {/* Input section */}
        <div className="flex items-center gap-4 w-[98%] rounded-lg mx-auto justify-center bg-night h-[7%]">
          <input
            type="text"
            className="bg-midnight rounded-full h-8 w-[90%] text-white px-4"
          />
          <button>
            <Send className="text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChatRoom;
