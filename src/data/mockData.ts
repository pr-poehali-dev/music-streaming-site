import { Track, Playlist, Artist, Album } from "@/types/music";

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

export const mockArtists: Artist[] = [
  {
    id: "1",
    name: "Neon Dreams",
    bio: "Synthwave артист из будущего",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    followers: 125000,
    albums: [
      {
        id: "1",
        name: "Synthwave Nights",
        artist: "Neon Dreams",
        year: 2023,
        cover:
          "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
        tracks: [mockTracks[0]],
      },
    ],
  },
  {
    id: "2",
    name: "Ambient Soul",
    bio: "Создатель расслабляющих звуковых пейзажей",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    followers: 89000,
    albums: [
      {
        id: "2",
        name: "Nature Sounds",
        artist: "Ambient Soul",
        year: 2022,
        cover:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
        tracks: [mockTracks[1]],
      },
    ],
  },
  {
    id: "3",
    name: "City Lights",
    bio: "Электронная музыка большого города",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
    followers: 203000,
    albums: [
      {
        id: "3",
        name: "Urban Beats",
        artist: "City Lights",
        year: 2024,
        cover:
          "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
        tracks: [mockTracks[2]],
      },
    ],
  },
];

export const mockAlbums: Album[] = mockArtists.flatMap(
  (artist) => artist.albums,
);

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

export const mockArtists: Artist[] = [
  {
    id: "1",
    name: "Neon Dreams",
    bio: "Synthwave артист из будущего",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    followers: 125000,
    albums: [
      {
        id: "1",
        name: "Synthwave Nights",
        artist: "Neon Dreams",
        year: 2023,
        cover:
          "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
        tracks: [mockTracks[0]],
      },
    ],
  },
  {
    id: "2",
    name: "Ambient Soul",
    bio: "Создатель расслабляющих звуковых пейзажей",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    followers: 89000,
    albums: [
      {
        id: "2",
        name: "Nature Sounds",
        artist: "Ambient Soul",
        year: 2022,
        cover:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
        tracks: [mockTracks[1]],
      },
    ],
  },
  {
    id: "3",
    name: "City Lights",
    bio: "Электронная музыка большого города",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
    followers: 203000,
    albums: [
      {
        id: "3",
        name: "Urban Beats",
        artist: "City Lights",
        year: 2024,
        cover:
          "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
        tracks: [mockTracks[2]],
      },
    ],
  },
];

export const mockAlbums: Album[] = mockArtists.flatMap(
  (artist) => artist.albums,
);
