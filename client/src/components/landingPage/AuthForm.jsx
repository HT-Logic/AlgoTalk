import React from "react";
import { Form, Link } from "react-router-dom";

const AuthForm = ({ button }) => {
  return (
    <section className="bg-night px-8 py-4 rounded-xl w-96">
      <div className="text-center text-2xl mb-8 mt-4 font-semibold">
        Welcome to AlgoTalk
      </div>
      <Form>
        <div className="my-4">
          <label htmlFor="username" className="block">
            Username <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="border-2 border-white outline-primary w-full rounded p-2"
          />
        </div>
        {button === "Sign Up" && (
          <div className="my-4">
            <label htmlFor="email">
              Email <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="border-2 border-white outline-primary w-full rounded p-2"
            />
          </div>
        )}

        <div className="my-4">
          <label htmlFor="password">
            Password <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            name="password"
            id="password"
            className="border-2 border-white outline-primary w-full rounded p-2"
          />
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-4 mt-8">
          <button className="w-full bg-primary rounded p-2 cursor-pointer">
            {button}
          </button>

          {button === "Sign In" ? (
            <Link to={"/sign-up"} className="text-primary">
              create new account
            </Link>
          ) : (
            <Link to={"/sign-in"} className="text-primary">
              alerady have an account
            </Link>
          )}
        </div>
      </Form>
    </section>
  );
};

export default AuthForm;
