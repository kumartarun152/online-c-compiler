"use client";

export default function OutputPanel({ output }) {
  return (
    <div className="w-1/2 flex flex-col bg-[#020617]">

      <div className="h-10 flex items-center justify-between px-4 border-b border-gray-700">
        <span className="font-semibold text-sm">Output</span>
      </div>

      <pre className="flex-1 p-4 text-green-400 whitespace-pre-wrap">
        {output || "Type something in editor..."}
      </pre>
    </div>
  );
}
