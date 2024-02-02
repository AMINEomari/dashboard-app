import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import MessagesStoriesBar from "@/components/MessagesStoriesBar";
import MainChatBar from "@/components/MainChatBar";
import MainSharedBar from "@/components/MainSharedBar";
import { useState } from "react";

export default function Home() {
  const [ActiveUser, setActiveUser] = useState();
  const [chatSection, setChatSection] = useState();
  return (
    <div className="flex w-full">
      <Navbar setChatSection={setChatSection} />
      <div className="h-screen w-full overflow-hidden">
        <div className="h-[8%]">
          <Topbar />
        </div>
        {chatSection && (
          <div className="flex h-[92%]">
            <MessagesStoriesBar setActiveUser={setActiveUser} />
            <MainChatBar ActiveUser={ActiveUser} />
            <MainSharedBar />
          </div>
        )}
      </div>
    </div>
  );
}
