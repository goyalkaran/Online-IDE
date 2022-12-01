import React, { useState } from "react";
import { CodeEditor } from "../components/CodeEditor";
import { Problem } from "../components/Problem";
import { Output } from "../components/Output.js";
export const ProblemStatement = () => {
  const [message, setMessage] = useState("");
  const getOutput = (msg) => {
    setMessage(msg);
  };
  return (
    <div className="container">
      <div className="row">
        <Problem />
        <CodeEditor output={getOutput} />
      </div>
      <br />
      <div className="row">
        OUTPUT:
        <Output message={message} />
      </div>
    </div>
  );
};
