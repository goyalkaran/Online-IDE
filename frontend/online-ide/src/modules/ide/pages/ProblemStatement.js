import React from "react";
import { CodeEditor } from "../components/CodeEditor";
import { Problem } from "../components/Problem";

export const ProblemStatement = () => {
  return (
    <div className="row">
      <Problem />
      <CodeEditor />
    </div>
  );
};
