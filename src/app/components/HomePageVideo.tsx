import React from "react";
import ReactPlayer from "react-player";

const HomePageVideo = () => {
  return (
    <div className="w-3/4 mt-4 border-8 border-amber-300 rounded-2xl">
      
      <ReactPlayer
        src="/videos/7106353-uhd_3840_2160_30fps.mp4"
        autoPlay
        loop
        muted
        controls
        width="100%"
        height="100%"
        className="rounded-lg"
      />
    </div>
  );
};

export default HomePageVideo;
