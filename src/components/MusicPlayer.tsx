import React from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useMusicContext } from "@/context/MusicContext";

const MusicPlayer: React.FC = () => {
  const {
    currentTrack,
    isPlaying,
    togglePlay,
    volume,
    setVolume,
    currentTime,
    duration,
  } = useMusicContext();

  if (!currentTrack) {
    return (
      <div className="bg-gray-900 border-t border-gray-700 p-4">
        <div className="flex items-center justify-center text-gray-500">
          <Icon name="Music" size={24} className="mr-2" />
          <span>Выберите трек для воспроизведения</span>
        </div>
      </div>
    );
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-gray-900 border-t border-gray-700 p-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Track Info */}
        <div className="flex items-center space-x-4 flex-1 min-w-0">
          <img
            src={currentTrack.cover}
            alt={currentTrack.album}
            className="w-14 h-14 rounded object-cover"
          />
          <div className="min-w-0">
            <p className="font-medium text-white truncate">
              {currentTrack.title}
            </p>
            <p className="text-sm text-gray-400 truncate">
              {currentTrack.artist}
            </p>
          </div>
          <Button
            size="sm"
            variant="ghost"
            className="text-gray-400 hover:text-white"
          >
            <Icon name="Heart" size={16} />
          </Button>
        </div>

        {/* Player Controls */}
        <div className="flex-2 max-w-2xl mx-8">
          <div className="flex items-center justify-center space-x-4 mb-2">
            <Button
              size="sm"
              variant="ghost"
              className="text-gray-400 hover:text-white"
            >
              <Icon name="Shuffle" size={18} />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="text-gray-400 hover:text-white"
            >
              <Icon name="SkipBack" size={18} />
            </Button>
            <Button
              size="lg"
              className="rounded-full bg-white hover:bg-gray-200 text-black w-12 h-12"
              onClick={togglePlay}
            >
              {isPlaying ? (
                <Icon name="Pause" size={20} />
              ) : (
                <Icon name="Play" size={20} />
              )}
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="text-gray-400 hover:text-white"
            >
              <Icon name="SkipForward" size={18} />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="text-gray-400 hover:text-white"
            >
              <Icon name="Repeat" size={18} />
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-400 w-10">
              {formatTime(currentTime)}
            </span>
            <Slider
              value={[currentTime]}
              max={duration || 100}
              step={1}
              className="flex-1"
            />
            <span className="text-xs text-gray-400 w-10">
              {currentTrack.duration}
            </span>
          </div>
        </div>

        {/* Volume Control */}
        <div className="flex items-center space-x-3 flex-1 justify-end">
          <Button
            size="sm"
            variant="ghost"
            className="text-gray-400 hover:text-white"
          >
            <Icon name="Mic2" size={16} />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="text-gray-400 hover:text-white"
          >
            <Icon name="ListMusic" size={16} />
          </Button>
          <div className="flex items-center space-x-2">
            <Icon name="Volume2" size={16} className="text-gray-400" />
            <Slider
              value={[volume * 100]}
              max={100}
              step={1}
              className="w-24"
              onValueChange={(values) => setVolume(values[0] / 100)}
            />
          </div>
          <Button
            size="sm"
            variant="ghost"
            className="text-gray-400 hover:text-white"
          >
            <Icon name="Maximize2" size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
