import React from "react";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center h-52 w-3/4 gap-3 relative border border-amber-600">
      <div className="font-medium text-6xl">Innovation, redefined</div>
      <div className="text-xl text-gray-400">
        Meet the Innovation Workspace, the AI-powered collaboration platform
        that helps your team build the right thing faster.
      </div>
      <div className="absolute left-4 top-4 flex flex-col gap-4">
        <img src="/images/signupImages/roger-cursor.svg" />
        <img src="/images/signupImages/rad-cursor.svg" className="animate-diagonally-right" />
      </div>
      <img
        src="/images/signupImages/cursor-ai.svg"
        className="absolute bottom-4 right-4 animate-diagonally-left"
      />
    </div>
  );
};

export default SignUp;
