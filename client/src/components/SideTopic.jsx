import React from "react";
import { Link } from "react-router-dom";

const SideTopic = () => {
  return (
    <Link className="flex justify-center items-center  gap-4 hover:bg-midnight px-5 py-3">
      <div className="w-64 bg-amber-400  flex justify-center rounded-full overflow-hidden object-cover">
        <img src="/react js.jpg" alt="fds" />
      </div>
      <div>
        <h1 className="text-xl mb-2">React</h1>
        <p className="text-sm line-clamp-2 text-neutral-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis veniam
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis veniam
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis veniam
        </p>
      </div>
    </Link>
  );
};

export default SideTopic;
