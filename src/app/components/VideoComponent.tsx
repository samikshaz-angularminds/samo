import React, { useState } from "react";

const VideoComponent = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="font-bold text-4xl my-3 w-2/3 text-center">
        A better way to get from first idea to final outcome faster.
      </div>
      <div className="bg-yellow-300 rounded-2xl pt-20 px-6 flex justify-center w-full">
        <div className="">
          <video
            width="500"
            height="500"
            autoPlay
            muted
            playsInline
            className="rounded-t-2xl shadow"
          >
            <source
              src="/videos/7106353-uhd_3840_2160_30fps.mp4"
              type="video/mp4"
            />
            {/* <source src="movie.ogg" type="video/ogg" /> */}
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <div
          className={`px-2 w-1/3 `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="border border-gray-200 mb-4"></div>
          <div className={isHovered ? "opacity-50 animate-up" : ""}>
            <div className="font-medium text-3xl mb-3">
              Meet less, achieve more
            </div>
            <div className="text-gray-600">
              Share your brilliant ideas without scheduling another meeting -
              record a Talktrack any time and share it anywhere. Need to chat
              IRL? Launch a live call right on the canvas without wasting time
              or switching tools.
            </div>
          </div>
        </div>
        <div
          className="px-2 w-1/3"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="border border-gray-200 mb-4"></div>
          <div className={isHovered ? "opacity-50 animate-up" : ""}>
            <div className="font-medium text-3xl mb-3">
              Bring your tools together
            </div>
            <div className="text-gray-600">
              Bring your favorite planning and productivity tools from
              Microsoft, Google, and Atlassian into Miro, and turn solo work
              into multiplayer action.
            </div>
          </div>
        </div>
        <div
          className="px-2 w-1/3"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="border border-gray-200 mb-4"></div>

          <div className={isHovered ? "opacity-50 animate-up" : ""}>
            <div className="font-medium text-3xl mb-3">Level-up the energy</div>
            <div className="text-gray-600">
              Spark excitement with playful features that get everyone in the
              game - from quick-fire polls and dot voting to dynamic sliders and
              surprise spinners. Watch your team shift from passive observers to
              enthusiastic contributors.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
