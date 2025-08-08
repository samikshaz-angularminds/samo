import React from "react";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center  w-3/4 gap-4 relative my-4 p-6">
      <div className="font-medium text-6xl">Innovation, redefined</div>
      <div className="text-xl text-gray-400">
        Meet the Innovation Workspace, the AI-powered collaboration platform
        that helps your team build the right thing faster.
      </div>
      <div className="absolute -left-14 -top-3 flex flex-col gap-16">
        <img
          src="/images/signupImages/roger-cursor.svg"
          className="animate-diagonally-down"
        />
        <img
          src="/images/signupImages/rad-cursor.svg"
          className="animate-diagonally-right"
        />
      </div>
      <img
        src="/images/signupImages/cursor-ai.svg"
        className="absolute bottom-0 right-0 animate-diagonally-left"
      />
      <div className="flex flex-col gap-3 w-60">
        <input type="text" placeholder="Enter your work email" className="bg-white p-3 border border-gray-200 rounded-lg focus-within:border-blue-500" />
        <button className="bg-blue-500 text-white font-bold p-3 rounded-lg cursor-pointer hover:bg-violet-400">Sign up free</button>
      </div>
    </div>
  );
};

export default SignUp;
