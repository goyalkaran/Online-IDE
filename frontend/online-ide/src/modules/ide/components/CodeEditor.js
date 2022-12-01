import React, { useRef } from "react";
import Editor from "@monaco-editor/react";
import {API_CLIENT} from '../../../shared/services/api-client.js';

export const CodeEditor = ({output}) => {
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
  const compileAndRun = async() => {
    console.log("editor ref", editorRef.current);
    const code = editorRef.current.getValue();
    console.log("CODE    ", code);
    const response=await API_CLIENT.post(process.env.REACT_APP_COMPILE_AND_RUN,{code:code})
    console.log("COMPILE RESPONSE: ",response);
    if(response.data.details){
      output(`${response.data.message} ${response.data.details}`);
    }else{
      output(`${response.data.message} ${response.data.result}`);
    }
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
