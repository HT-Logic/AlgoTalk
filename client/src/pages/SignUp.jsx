import React from "react";
import AuthForm from "../components/landingPage/AuthForm";

const SignUp = () => {
  return (
    <section className="h-screen w-full bg-midnight text-white flex justify-center items-center">
      <AuthForm button={"Sign Up"} />
    </section>
  );
};

export default SignUp;
