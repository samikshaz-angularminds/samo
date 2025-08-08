"use client";

import RightSection from "./RightSection";
import LeftSection from "./LeftSection";

const Header = () => {
  return (
    <header
      className="flex justify-between items-center px-8 py-2 bg-white 
        shadow-2xl mt-3 mx-16  rounded-lg"
    >
      <LeftSection />
      <RightSection />
    </header>
  );
};

export default Header;
