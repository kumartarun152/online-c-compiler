import Image from "next/image";
import {
  Play,
  Share2,
  Sun,
  Moon,
  Maximize,
} from "lucide-react";

const titles = {
  javascript: "Online JavaScript Compiler",
  python: "Online Python Compiler",
  java: "Online Java Compiler",
  c: "Online C Compiler",
  cpp: "Online C++ Compiler",
  html: "Online HTML Editor",
};

export default function Topbar({ language, theme, setTheme }) {
  return (
    <div className="h-24 bg-[#1e293b] flex items-center justify-between px-6 border-b border-gray-700">

      {/* Logo + Title */}
      <div className="flex items-center gap-4">
        <div className="relative w-[90px] h-[50px] md:w-[110px] md:h-[56px]">
          <Image
            src="/logo/logo.svg"
            alt="Company Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        <span className="font-semibold text-base md:text-lg whitespace-nowrap">
          {titles[language]}
        </span>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4">
        <button title="Fullscreen" className="hover:text-blue-400">
          <Maximize size={20} />
        </button>

        <button
          title="Theme"
          className="hover:text-yellow-400"
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button title="Share" className="hover:text-blue-400">
          <Share2 size={20} />
        </button>

        <button className="flex items-center gap-2 bg-blue-600 px-5 py-2 rounded-md hover:bg-blue-700">
          <Play size={18} /> Run Code
        </button>
      </div>
    </div>
  );
}
