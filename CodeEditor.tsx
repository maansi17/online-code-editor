"use client";

import React, { useState } from "react";
import { useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { javascript } from "@codemirror/lang-javascript";

type CodeEditorProps = {
  language: string;
};

export const CodeEditor: React.FC<CodeEditorProps> = ({ language }) => {
  const [code, setCode] = useState("// Start coding...");

  // Select language extension for syntax highlighting
  const getLanguageExtension = () => {
    switch (language) {
      case "Python":
        return python();
      case "JavaScript":
        return javascript();
      default:
        return javascript(); // Fallback to JavaScript
    }
  };

  return (
    <CodeMirror
      value={code}
      height="300px"
      theme="dark"
      extensions={[getLanguageExtension()]}
      onChange={(value) => setCode(value)}
    />
  );
};
