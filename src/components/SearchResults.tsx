import React from "react";
import { useMusicContext } from "@/context/MusicContext";
import Icon from "@/components/ui/icon";

const SearchResults: React.FC = () => {
  const { searchResults, searchQuery, playTrack } = useMusicContext();

  if (!searchQuery.trim()) return null;

  const hasResults =
    searchResults.artists.length > 0 ||
    searchResults.albums.length > 0 ||
    searchResults.tracks.length > 0;

  if (!hasResults) {
    return (
      <div className="text-center py-12">
        <Icon name="Search" size={48} className="mx-auto mb-4 text-gray-400" />
        <h3 className="text-xl font-semibold mb-2">Ничего не найдено</h3>
        <p className="text-gray-400">Попробуйте изменить запрос</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Исполнители */}
      {searchResults.artists.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-4">Исполнители</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {searchResults.artists.map((artist) => (
              <div
                key={artist.id}
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-700/50 transition-colors cursor-pointer"
              >
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full aspect-square object-cover rounded-full mb-4"
                />
                <h3 className="font-semibold text-center mb-1">
                  {artist.name}
                </h3>
                <p className="text-sm text-gray-400 text-center">
                  {artist.followers.toLocaleString()} подписчиков
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Альбомы */}
      {searchResults.albums.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-4">Альбомы</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {searchResults.albums.map((album) => (
              <div
                key={album.id}
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-700/50 transition-colors cursor-pointer"
              >
                <img
                  src={album.cover}
                  alt={album.name}
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold mb-1">{album.name}</h3>
                <p className="text-sm text-gray-400">{album.artist}</p>
                <p className="text-xs text-gray-500">{album.year}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Треки */}
      {searchResults.tracks.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-4">Треки</h2>
          <div className="bg-gray-800/30 rounded-lg p-4">
            {searchResults.tracks.map((track, index) => (
              <div
                key={track.id}
                className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-700/50 transition-colors cursor-pointer"
                onClick={() => playTrack(track)}
              >
                <div className="w-12 h-12 bg-gray-700 rounded flex items-center justify-center text-gray-400">
                  <Icon name="Play" size={16} />
                </div>
                <img
                  src={track.cover}
                  alt={track.album}
                  className="w-12 h-12 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="font-medium">{track.title}</h4>
                  <p className="text-sm text-gray-400">{track.artist}</p>
                </div>
                <div className="text-sm text-gray-400">{track.duration}</div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default SearchResults;
