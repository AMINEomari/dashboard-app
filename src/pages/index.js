import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import MessagesStoriesBar from "@/components/MessagesStoriesBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex">
      <Navbar />
      <div className="w-full">
      <Topbar />
      <MessagesStoriesBar />
      </div>
    </div>
  );
}
