export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  cover: string;
  audioUrl?: string;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  cover: string;
  tracks: Track[];
  createdAt: string;
}

export interface MusicState {
  currentTrack: Track | null;
  isPlaying: boolean;
  volume: number;
  currentTime: number;
  duration: number;
}

export interface Artist {
  id: string;
  name: string;
  bio: string;
  image: string;
  albums: Album[];
  followers: number;
}

export interface Album {
  id: string;
  name: string;
  artist: string;
  year: number;
  cover: string;
  tracks: Track[];
}

export interface SearchResults {
  artists: Artist[];
  albums: Album[];
  tracks: Track[];
}
