import React from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Track } from "@/types/music";
import { useMusicContext } from "@/context/MusicContext";

interface TrackListProps {
  tracks: Track[];
  showNumbers?: boolean;
}

const TrackList: React.FC<TrackListProps> = ({
  tracks,
  showNumbers = true,
}) => {
  const { playTrack, currentTrack, isPlaying } = useMusicContext();

  const handlePlayTrack = (track: Track) => {
    playTrack(track);
  };

  return (
    <div className="space-y-1">
      {tracks.map((track, index) => {
        const isCurrentTrack = currentTrack?.id === track.id;

        return (
          <div
            key={track.id}
            className="group flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800/50 transition-colors cursor-pointer"
            onClick={() => handlePlayTrack(track)}
          >
            <div className="w-8 flex items-center justify-center">
              {showNumbers && (
                <>
                  <span className="text-sm text-gray-400 group-hover:hidden">
                    {index + 1}
                  </span>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="hidden group-hover:flex w-8 h-8 p-0"
                  >
                    {isCurrentTrack && isPlaying ? (
                      <Icon name="Pause" size={16} />
                    ) : (
                      <Icon name="Play" size={16} />
                    )}
                  </Button>
                </>
              )}
            </div>

            <img
              src={track.cover}
              alt={track.album}
              className="w-12 h-12 rounded object-cover"
            />

            <div className="flex-1 min-w-0">
              <p
                className={`font-medium truncate ${isCurrentTrack ? "text-purple-400" : "text-white"}`}
              >
                {track.title}
              </p>
              <p className="text-sm text-gray-400 truncate">{track.artist}</p>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <span className="text-sm text-gray-400">{track.album}</span>
              <span className="text-sm text-gray-400">{track.duration}</span>
              <Button
                size="sm"
                variant="ghost"
                className="opacity-0 group-hover:opacity-100"
              >
                <Icon name="Heart" size={16} />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="opacity-0 group-hover:opacity-100"
              >
                <Icon name="MoreHorizontal" size={16} />
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TrackList;
