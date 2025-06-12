import { Track, Playlist } from "@/types/music";

export const mockTracks: Track[] = [
  {
    id: "1",
    title: "Midnight Drive",
    artist: "Neon Dreams",
    album: "Synthwave Nights",
    duration: "3:45",
    cover:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
  },
  {
    id: "2",
    title: "Ocean Waves",
    artist: "Ambient Soul",
    album: "Nature Sounds",
    duration: "4:12",
    cover:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
  },
  {
    id: "3",
    title: "Electric Nights",
    artist: "City Lights",
    album: "Urban Beats",
    duration: "2:58",
    cover:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
  },
  {
    id: "4",
    title: "Cosmic Journey",
    artist: "Space Echo",
    album: "Interstellar",
    duration: "5:23",
    cover:
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=300&h=300&fit=crop",
  },
];

export const mockPlaylists: Playlist[] = [
  {
    id: "1",
    name: "Избранное",
    description: "Ваши любимые треки",
    cover:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
    tracks: mockTracks.slice(0, 2),
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    name: "Расслабляющая музыка",
    description: "Для спокойного вечера",
    cover:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    tracks: [mockTracks[1], mockTracks[3]],
    createdAt: "2024-01-10",
  },
  {
    id: "3",
    name: "Энергичная музыка",
    description: "Для тренировок и активности",
    cover:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
    tracks: [mockTracks[0], mockTracks[2]],
    createdAt: "2024-01-20",
  },
];
