import React, { useState } from "react";
import { Form } from "react-router-dom";

const AccountForm = () => {
  const [isChangingPsw, setIsChangingPsw] = useState(false);
  const [formData, setFormData] = useState({
    username: "htet aung lwin",
    email: "qqwer@12.com",
    newpsw: "",
    oldpsw: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Form className="bg-night py-4 md:py-8 px-4 mt-8 rounded-xl">
      <div className="mb-8">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username-input"
          value={formData.username}
          onChange={handleChange}
          className="border-2 border-neutral-300 w-full rounded p-2 focus:outline-2 focus:border-0 focus:outline-primary"
        />
      </div>
      <div className="mb-8">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email-input"
          value={formData.email}
          onChange={handleChange}
          className="border-2 border-neutral-300 w-full rounded p-2 focus:outline-2 focus:border-0 focus:outline-primary"
        />
      </div>
      {!isChangingPsw && (
        <button
          type="button"
          className="text-danger mb-8 cursor-pointer block"
          onClick={() => setIsChangingPsw(true)}
        >
          Change Password
        </button>
      )}
      {isChangingPsw && (
        <>
          <div className="mb-8">
            <label htmlFor="newpsw">New Password</label>
            <input
              type="password"
              name="newpsw"
              id="newpsw-input"
              value={formData.newpsw}
              onChange={handleChange}
              className="border-2 border-neutral-300 w-full rounded p-2 focus:outline-2 focus:border-0 focus:outline-primary"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="oldpsw">Old Password</label>
            <input
              type="password"
              name="oldpsw"
              id="oldpsw-input"
              value={formData.oldpsw}
              onChange={handleChange}
              className="border-2 border-neutral-300 w-full rounded p-2 focus:outline-2 focus:border-0 focus:outline-primary"
            />
          </div>
        </>
      )}
      <button
        type="submit"
        className="bg-primary text-midnight px-4 py-2 rounded"
      >
        Done
      </button>
      {isChangingPsw && (
        <button
          type="button"
          className="text-danger px-4 py-2 rounded"
          onClick={() => setIsChangingPsw(false)}
        >
          Cancel
        </button>
      )}
    </Form>
  );
};

export default AccountForm;
