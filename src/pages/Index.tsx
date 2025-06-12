import React from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import MusicPlayer from "@/components/MusicPlayer";
import { MusicProvider } from "@/context/MusicContext";

const Index = () => {
  return (
    <MusicProvider>
      <div className="h-screen flex flex-col bg-black">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <MainContent />
        </div>
        <MusicPlayer />
      </div>
    </MusicProvider>
  );
};

export default Index;
