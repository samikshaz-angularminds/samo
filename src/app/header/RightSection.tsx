const RightSection = () => {
  return (
    <div className="flex gap-3 items-center">
      <div className="cursor-pointer">Book a demo</div>
      <div>
        <button className="border border-gray-200 px-3 py-2 rounded-lg cursor-pointer">
          Login
        </button>
      </div>
      <div>
        <button
          className="border border-gray-200 px-3 py-2 rounded-lg bg-blue-500 
                text-white cursor-pointer hover:bg-blue-600"
        >
          Sign up free
        </button>
      </div>
    </div>
  );
};

export default RightSection;