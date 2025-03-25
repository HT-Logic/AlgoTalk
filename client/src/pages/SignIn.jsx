import React from "react";
import AuthForm from "../components/landingPage/AuthForm";

const SignIn = () => {
  return (
    <section className="h-screen w-full bg-midnight text-white flex justify-center items-center">
      <AuthForm button={"Sign In"} />
    </section>
  );
};

export default SignIn;
