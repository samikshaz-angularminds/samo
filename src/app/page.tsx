"use client";

import ConnectedCompanies from "./components/homepage/ConnectedCompanies";
import HomePageVideo from "./components/homepage/HomePageVideo";
import SignUp from "./components/homepage/SignUp";
import VideoComponent from "./components/homepage/VideoComponent";
import Header from "./header/page";
import { useEffect, useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        // threshold
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center my-8">
      <Header />
      <div className="flex flex-col items-center justify-center mt-20">
        <SignUp />
        <HomePageVideo />
        <div className="mt-3 w-3/4">
          <ConnectedCompanies />
        </div>

        <div className="mt-3 w-3/4">
          <VideoComponent />
        </div>

        {/* <BottomPopUp show={show} /> */}
      </div>
    </div>
  );
}
