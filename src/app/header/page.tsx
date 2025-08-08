"use client";

import RightSection from "./RightSection";
import LeftSection from "./LeftSection";

const Header = () => {
  return (
    <header
      className="flex justify-between items-center px-8 py-2 bg-white/99 
        shadow-2xl mt-3 mx-16  rounded-lg fixed top-0 z-10 w-6/7"
    >
      <LeftSection />
      <RightSection />
    </header>
  );
};

export default Header;
