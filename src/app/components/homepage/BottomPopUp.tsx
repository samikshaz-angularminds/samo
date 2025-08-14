import React from "react";

const BottomPopUp = ({ show }: { show: boolean }) => {
  return (
    <div
      className={`fixed flex justify-between bottom-0 left-0 w-full bg-white  p-4 shadow-lg transition-transform duration-300 ${
        show ? "block" : "hidden"
      }`}
    >
      <div>
        <div className="font-bold">Get started with your team in minutes</div>
        <div>
          We recommend using your work email—it keeps work and life separate.
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <input
            type="text"
            placeholder="Enter your work email"
            className="bg-white p-2 border border-gray-200 rounded-lg focus-within:border-blue-500"
          />
        </div>
        <div>
          <button className="bg-blue-400 text-white font-bold p-2 rounded-lg cursor-pointer">
            Sign up free
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomPopUp;
