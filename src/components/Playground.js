"use client";
import { useState } from "react";
import EditorPanel from "./Editor";
import Output from "./Output";

export default function Playground() {
  const [code, setCode] = useState("");

  return (
    <div className="flex h-screen">
      <EditorPanel
        language="javascript"
        theme="dark"
        code={code}
        setCode={setCode}
      />

      <Output output={code} />
    </div>
  );
}
