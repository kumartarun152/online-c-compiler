"use client";
import MonacoEditor from "@monaco-editor/react";

const filenames = {
  javascript: "main.js",
  python: "main.py",
  java: "Main.java",
  c: "main.c",
  cpp: "main.cpp",
  html: "index.html",
};

export default function EditorPanel({ language, theme }) {
  return (
    <div className="w-1/2 flex flex-col border-r border-gray-700">

      {/* File Tab */}
      <div className="h-10 bg-[#1e293b] px-4 flex items-center text-sm border-b border-gray-700">
        {filenames[language]}
      </div>

      <MonacoEditor
        height="100%"
        language={language === "cpp" ? "cpp" : language}
        theme={theme === "dark" ? "vs-dark" : "light"}
        value={`// Start coding in ${language}`}
      />
    </div>
  );
}
