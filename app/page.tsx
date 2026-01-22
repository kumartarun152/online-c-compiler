"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import EditorPanel from "@/components/Editor";
import OutputPanel from "@/components/Output";

export default function Home() {
  const [language, setLanguage] = useState("javascript");
  const [theme, setTheme] = useState("dark");

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar language={language} setLanguage={setLanguage} />

      <div className="flex flex-col flex-1">
        <Topbar
          language={language}
          theme={theme}
          setTheme={setTheme}
        />

        <div className="flex flex-1 border-t border-gray-700">
          <EditorPanel language={language} theme={theme} />
          <OutputPanel />
        </div>
      </div>
    </div>
  );
}
