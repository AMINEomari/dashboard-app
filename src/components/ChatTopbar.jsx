import React from "react";
import ChatTopbarFeatures from "./ChatTopbarFeatures";
import VideoCamera from "@/icons/VideoCamera";
import PhoneCall from "@/icons/PhoneCall";
import Camera from "@/icons/Camera";
import ChevronRight from "@/icons/ChevronRight";

const ChatTopbar = () => {
  const FEATURES_DATA = [
    {
      id: 1,
      icon: <VideoCamera />,
      textcolor: "text-blue-300",
    },
    {
      id: 2,
      icon: <PhoneCall />,
      textcolor: "text-green-300",
    },
    {
      id: 3,
      icon: <Camera />,
      textcolor: "text-gray-400",
    },
  ];

  return (
    <div className="relative h-[140px] border-b border-gray-700/60 flex items-center justify-between px-10">
      <div className="flex gap-x-4 items-center">
        <img
          src="/imgs/ProfilePic2.jpg"
          alt="ProfilePic"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h2 className="text-white text-2xl">Michael Dias</h2>
          <p className="text-gray-500 text-xs">Offline</p>
        </div>
      </div>
      <div className="flex gap-x-5">
        {FEATURES_DATA.map(({ id, icon, textcolor }) => (
          <ChatTopbarFeatures key={id} icon={icon} textcolor={textcolor} />
        ))}
      </div>
      <div className="absolute -right-[13px]">
        <button className="border border-gray-700/60 bg-gray-900 p-1.5 text-white rounded-full">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ChatTopbar;
