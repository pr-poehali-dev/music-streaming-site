import React from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { mockPlaylists } from "@/data/mockData";

const Sidebar: React.FC = () => {
  const menuItems = [
    { icon: "Home", label: "Главная", active: true },
    { icon: "Search", label: "Поиск" },
    { icon: "Library", label: "Моя библиотека" },
    { icon: "Heart", label: "Любимые треки" },
    { icon: "Clock", label: "Недавно прослушанное" },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white p-4 h-screen overflow-y-auto">
      <nav className="space-y-2 mb-8">
        {menuItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            className={`w-full justify-start space-x-3 ${
              item.active
                ? "bg-purple-600 hover:bg-purple-700"
                : "hover:bg-gray-800"
            }`}
          >
            <Icon name={item.icon as any} size={20} />
            <span>{item.label}</span>
          </Button>
        ))}
      </nav>

      <div className="border-t border-gray-700 pt-4">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
          Плейлисты
        </h3>
        <div className="space-y-2">
          {mockPlaylists.map((playlist) => (
            <div
              key={playlist.id}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 cursor-pointer transition-colors"
            >
              <img
                src={playlist.cover}
                alt={playlist.name}
                className="w-10 h-10 rounded object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium truncate">{playlist.name}</p>
                <p className="text-xs text-gray-400 truncate">
                  {playlist.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
