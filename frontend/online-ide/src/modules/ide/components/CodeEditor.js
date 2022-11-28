import React from "react";
import Editor from "@monaco-editor/react";

export const CodeEditor = () => {
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
  const compileAndRun=()=>{

  }
  return (
    <div className="col">
      <Editor
        theme="vs-dark"
        height="70%"
        width="100%"
        defaultLanguage="java"
        defaultValue="class Solution{}"
        options={options}
      />
      <br/>
      <button className="btn btn-primary" onClick={compileAndRun}>Complie And Run</button>
    </div>
  );
};
