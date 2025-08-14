import React, { useState } from "react";

const VideoComponent = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const staticData = [
    {
      id: 1,
      heading: "Meet less, achieve more",
      content: `Share your brilliant ideas without scheduling another meeting -
              record a Talktrack any time and share it anywhere. Need to chat
              IRL? Launch a live call right on the canvas without wasting time
              or switching tools.`,
    },
    {
      id: 2,
      heading: "Bring your tools together",
      content: `Share your brilliant ideas without scheduling another meeting -
              record a Talktrack any time and share it anywhere. Need to chat
              IRL? Launch Bring your favorite planning and productivity tools from
              Microsoft, Google, and Atlassian into Miro, and turn solo work
              into multiplayer action.`,
    },
    {
      id: 3,
      heading: "Level-up the energy",
      content: `Spark excitement with playful features that get everyone in the
              game - from quick-fire polls and dot voting to dynamic sliders and
              surprise spinners. Watch your team shift from passive observers to
              enthusiastic contributors.`,
    },
  ];

  const handleMouseEnter = (id: number) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className=" text-4xl my-3 w-2/3 text-center">
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
        {staticData.map((data, index) => (
          <div className="px-2 w-1/3" key={index}>
            <div className="border border-gray-200 mb-4"></div>
            <div
              onMouseEnter={() => handleMouseEnter(data.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={hoveredId === data.id ? "opacity-50 animate-up" : ""}
              >
                <div className="font-medium text-3xl mb-3">{data.heading}</div>
                <div className="text-gray-600">{data.content}</div>
              </div>
            </div>
            <div className="mt-4">
              <button className="bg-black text-white font-bold p-3 rounded-lg cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoComponent;
