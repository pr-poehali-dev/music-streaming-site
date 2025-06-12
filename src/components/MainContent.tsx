import React from "react";
import PlaylistCard from "./PlaylistCard";
import TrackList from "./TrackList";
import { mockPlaylists, mockTracks } from "@/data/mockData";

const MainContent: React.FC = () => {
  return (
    <main className="flex-1 bg-gradient-to-b from-gray-900 to-black text-white p-6 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg p-8 mb-8">
            <h1 className="text-4xl font-bold mb-2">
              Добро пожаловать в MusicStream
            </h1>
            <p className="text-lg opacity-90">
              Откройте для себя новую музыку и наслаждайтесь любимыми треками
            </p>
          </div>
        </section>

        {/* Featured Playlists */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Рекомендуемые плейлисты</h2>
            <button className="text-sm text-gray-400 hover:text-white transition-colors">
              Показать все
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {mockPlaylists.map((playlist) => (
              <PlaylistCard key={playlist.id} playlist={playlist} />
            ))}
          </div>
        </section>

        {/* Popular Tracks */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Популярные треки</h2>
            <button className="text-sm text-gray-400 hover:text-white transition-colors">
              Показать все
            </button>
          </div>
          <div className="bg-gray-800/30 rounded-lg p-4">
            <TrackList tracks={mockTracks} />
          </div>
        </section>

        {/* Recently Played */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Недавно прослушанное</h2>
            <button className="text-sm text-gray-400 hover:text-white transition-colors">
              Показать все
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {mockTracks.slice(0, 6).map((track) => (
              <div key={track.id} className="group cursor-pointer">
                <div className="relative mb-2">
                  <img
                    src={track.cover}
                    alt={track.album}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg
                        className="w-6 h-6 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-sm font-medium text-white truncate">
                  {track.title}
                </p>
                <p className="text-xs text-gray-400 truncate">{track.artist}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default MainContent;
