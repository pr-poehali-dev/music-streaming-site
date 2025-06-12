import React, { createContext, useContext, useState, ReactNode } from "react";
import { Track, MusicState, Artist, Album, SearchResults } from "@/types/music";
import { mockArtists, mockAlbums, mockTracks } from "@/data/mockData";

interface MusicContextType extends MusicState {
  playTrack: (track: Track) => void;
  pauseTrack: () => void;
  togglePlay: () => void;
  setVolume: (volume: number) => void;
  seekTo: (time: number) => void;
  searchQuery: string;
  searchResults: SearchResults;
  setSearchQuery: (query: string) => void;
  performSearch: (query: string) => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const useMusicContext = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error("useMusicContext must be used within MusicProvider");
  }
  return context;
};

interface MusicProviderProps {
  children: ReactNode;
}

export const MusicProvider: React.FC<MusicProviderProps> = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.7);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResults>({
    artists: [],
    albums: [],
    tracks: [],
  });

  const playTrack = (track: Track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const pauseTrack = () => {
    setIsPlaying(false);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const setVolume = (newVolume: number) => {
    setVolumeState(newVolume);
  };

  const seekTo = (time: number) => {
    setCurrentTime(time);
  };

  const performSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults({ artists: [], albums: [], tracks: [] });
      return;
    }

    const lowercaseQuery = query.toLowerCase();

    const foundArtists = mockArtists.filter((artist) =>
      artist.name.toLowerCase().includes(lowercaseQuery),
    );

    const foundAlbums = mockAlbums.filter(
      (album) =>
        album.name.toLowerCase().includes(lowercaseQuery) ||
        album.artist.toLowerCase().includes(lowercaseQuery),
    );

    const foundTracks = mockTracks.filter(
      (track) =>
        track.title.toLowerCase().includes(lowercaseQuery) ||
        track.artist.toLowerCase().includes(lowercaseQuery) ||
        track.album.toLowerCase().includes(lowercaseQuery),
    );

    setSearchResults({
      artists: foundArtists,
      albums: foundAlbums,
      tracks: foundTracks,
    });
  };

  const value: MusicContextType = {
    currentTrack,
    isPlaying,
    volume,
    currentTime,
    duration,
    playTrack,
    pauseTrack,
    togglePlay,
    setVolume,
    seekTo,
    searchQuery,
    searchResults,
    setSearchQuery,
    performSearch,
  };

  return (
    <MusicContext.Provider value={value}>{children}</MusicContext.Provider>
  );
};
