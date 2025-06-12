import React from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Playlist } from "@/types/music";
import { useMusicContext } from "@/context/MusicContext";

interface PlaylistCardProps {
  playlist: Playlist;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist }) => {
  const { playTrack } = useMusicContext();

  const handlePlayPlaylist = () => {
    if (playlist.tracks.length > 0) {
      playTrack(playlist.tracks[0]);
    }
  };

  return (
    <div className="group bg-gray-800/40 p-4 rounded-lg hover:bg-gray-800/60 transition-all duration-300 cursor-pointer">
      <div className="relative mb-4">
        <img
          src={playlist.cover}
          alt={playlist.name}
          className="w-full aspect-square object-cover rounded-lg shadow-lg"
        />
        <Button
          size="sm"
          className="absolute bottom-2 right-2 rounded-full bg-purple-600 hover:bg-purple-700 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg"
          onClick={handlePlayPlaylist}
        >
          <Icon name="Play" size={16} />
        </Button>
      </div>

      <div>
        <h3 className="font-semibold text-white mb-1 truncate">
          {playlist.name}
        </h3>
        <p className="text-sm text-gray-400 line-clamp-2">
          {playlist.description}
        </p>
        <p className="text-xs text-gray-500 mt-2">
          {playlist.tracks.length} треков
        </p>
      </div>
    </div>
  );
};

export default PlaylistCard;
