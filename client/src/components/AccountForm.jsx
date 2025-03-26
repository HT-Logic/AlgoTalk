import React, { useState } from "react";
import { Form } from "react-router-dom";

const AccountForm = () => {
  const [isChangingPsw, setIsChangingPsw] = useState(false);

  return (
    <Form className="bg-night py-4 md:py-8 px-4 mt-8 rounded-xl">
      <div className="mb-8">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={"htet aung lwin"}
          className="border-2 border-neutral-300 w-full rounded p-2 focus:outline-2 focus:border-0 focus:outline-primary"
        />
      </div>
      <div className="mb-8">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={"qqwer@12.com"}
          className="border-2 border-neutral-300 w-full rounded p-2 focus:outline-2 focus:border-0 focus:outline-primary"
        />
      </div>
      {!isChangingPsw && (
        <button
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
              id="newpsw"
              className="border-2 border-neutral-300 w-full rounded p-2 focus:outline-2 focus:border-0 focus:outline-primary"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="email">Old Password</label>
            <input
              type="password"
              name="oldpsw"
              id="oldpsw"
              className="border-2 border-neutral-300 w-full rounded p-2 focus:outline-2 focus:border-0 focus:outline-primary"
            />
          </div>
        </>
      )}
      <button
        type="submit"
        onClick={() => setIsChangingPsw(false)}
        className="bg-primary text-midnight px-4 py-2 rounded"
      >
        Done
      </button>
      {isChangingPsw && (
        <button
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
