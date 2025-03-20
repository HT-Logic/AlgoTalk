import React from "react";
import { Link } from "react-router-dom";

const Topic = () => {
  return (
    <Link className="bg-night px-4 py-2 rounded-xl group">
      <div className="flex justify-between items-end mb-4">
        <div className="text-2xl font-semibold group-hover:text-primary transition-colors duration-200">
          React
        </div>
        <div className="text-neutral-400 text-sm">123 member</div>
      </div>
      <div className="line-clamp-3 text-neutral-400">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
        doloremque quisquam est officiis autem consequuntur nemo totam mollitia
        possimus commodi quasi libero deleniti eos quae. Fugiat dolorem
        consectetur illo eum!
      </div>
    </Link>
  );
};

export default Topic;
