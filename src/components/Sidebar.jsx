import {
  SiJavascript,
  SiPython,
  SiC,
  SiCplusplus,
  SiHtml5,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const languages = [
  { id: "python", icon: <SiPython /> },
  { id: "javascript", icon: <SiJavascript /> },
  { id: "java", icon: <FaJava /> },
  { id: "c", icon: <SiC /> },
  { id: "cpp", icon: <SiCplusplus /> },
  { id: "html", icon: <SiHtml5 /> },
];

export default function Sidebar({ language, setLanguage }) {
  return (
    <div className="w-14 bg-[#020617] flex flex-col items-center py-4 gap-4 border-r border-gray-700">
      {languages.map((lang) => (
        <button
          key={lang.id}
          onClick={() => setLanguage(lang.id)}
          className={`w-9 h-9 flex items-center justify-center rounded-md text-lg
            ${
              language === lang.id
                ? "bg-blue-600 text-white"
                : "text-gray-400 hover:bg-gray-700"
            }`}
        >
          {lang.icon}
        </button>
      ))}
    </div>
  );
}
