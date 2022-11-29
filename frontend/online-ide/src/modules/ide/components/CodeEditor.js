import React, { useRef } from "react";
import Editor from "@monaco-editor/react";

export const CodeEditor = () => {
  const editorRef = useRef({});
  const options = {
    fontSize: 20,
    selectOnlineNumber: true,
    cursorStyle: "line",
    colorDecorators: true,
    scrollbar: {
      useShadows: false,
      verticalHasArrows: true,
      horizontalHasArrows: true,
      vertical: "visible",
      horizontal: "visible",
    },
  };
  const compileAndRun = () => {
    console.log("editor ref", editorRef.current);
    const code = editorRef.current.getValue();
    console.log("CODE    ", code);
  };
  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
    console.log("handleEditorDidMount called");
  };
  return (
    <div className="col">
      <Editor
        theme="vs-dark"
        height="70%"
        width="100%"
        defaultLanguage="java"
        defaultValue="class Solution{}"
        options={options}
        onMount={handleEditorDidMount}
      />
      <br />
      <button className="btn btn-primary" onClick={compileAndRun}>
        Compile And Run
      </button>
    </div>
  );
};
