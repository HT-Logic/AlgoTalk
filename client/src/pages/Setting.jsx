import React, { useState } from "react";
import AccountForm from "../components/AccountForm";

const Setting = () => {
  const [fileName, setFileName] = useState("No file selected");

  const handleFileChange = (event) => {
    setFileName(event.target.files[0]?.name || "No file selected");
  };

  return (
    <section className="w-[90%] mx-auto md:mt-4 pb-20 md:pb-0 pt-8 md:pt-0">
      <div className="mb-10 text-2xl md:text-4xl font-semibold">Setting</div>
      <div className="flex text-xl gap-8">
        <img
          src="/Hurricane.jpg"
          alt="pfp"
          className="w-32 h-32 rounded-full"
        />
        <div className="flex flex-col justify-evenly">
          <div className="font-semibold text-2xl">Htet Aung Lwin</div>

          <div>
            <button
              className="cursor-pointer hover:text-primary"
              onClick={() => document.getElementById("fileInput").click()}
            >
              Edit Profile Picture
            </button>
            <input
              type="file"
              id="fileInput"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <p className="text-sm text-neutral-500">{fileName}</p>
          </div>
        </div>
      </div>
      <AccountForm />
    </section>
  );
};

export default Setting;
