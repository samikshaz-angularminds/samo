"use client";

import Image from "next/image";
import Header from "./header/page";
import SignUp from "./components/SignUp";
import HomePageVideo from "./components/HomePageVideo";
import { useEffect, useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) { // threshold
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <div className="flex flex-col items-center justify-center mt-20">


      <SignUp />
      <HomePageVideo/>

      <div
      className={`fixed bottom-0 left-0 w-full bg-blue-500 text-white p-4 text-center shadow-lg transition-transform duration-300 ${
        show ? "block" : "hidden"
      }`}
    >
      This is the popup
    </div>
      </div>
    </div>
  );
}
