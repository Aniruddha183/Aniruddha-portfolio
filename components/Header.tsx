"use client";

import React, { useState, useEffect, useRef } from "react";
import { LogoIcon, PlayIcon, SunIcon, MoonIcon, PauseIcon } from "./Icons";
import { useTheme } from "./ThemeProvider";

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const { theme, setTheme } = useTheme();
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio
        .play()
        .catch((error) => console.error("Error playing audio:", error));
    }
    setIsPlaying(!isPlaying);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const headerClasses = `
    sticky top-0 z-40 w-full 
    transition-all duration-300 ease-in-out animate-fade-in-down
    ${isScrolled ? "py-2" : "py-4"}
  `;

  const containerClasses = `
    container mx-auto flex justify-between items-center px-4
    bg-white/80 dark:bg-[#111]/80 
    border border-gray-200/80 dark:border-gray-800/80 
    transition-all duration-300 ease-in-out
    ${isScrolled ? "max-w-2xl rounded-full" : "max-w-3xl rounded-md"}
  `;

  return (
    <header className={headerClasses}>
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        loop
      />
      <div className={containerClasses}>
        <a
          href="#"
          className="flex items-center gap-2 text-gray-900 dark:text-white font-semibold"
        >
          <LogoIcon className="w-6 h-6" />
          <span>Aniruddha</span>
        </a>
        <nav className="flex items-center space-x-2 text-gray-800 dark:text-gray-300">
          <a
            href="#experience"
            className="px-3 py-1.5 text-sm rounded-md hover:bg-gray-200/60 dark:hover:bg-gray-800/60 transition-colors"
          >
            work
          </a>
          <a
            href="#projects"
            className="px-3 py-1.5 text-sm rounded-md hover:bg-gray-200/60 dark:hover:bg-gray-800/60 transition-colors"
          >
            projects
          </a>
          <button
            onClick={togglePlayPause}
            className="p-2 rounded-full hover:bg-gray-200/60 dark:hover:bg-gray-800/60 transition-colors"
            aria-label="Toggle music"
          >
            {isPlaying ? (
              <PauseIcon className="w-5 h-5" />
            ) : (
              <PlayIcon className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200/60 dark:hover:bg-gray-800/60 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <MoonIcon className="w-5 h-5" />
            ) : (
              <SunIcon className="w-5 h-5" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
