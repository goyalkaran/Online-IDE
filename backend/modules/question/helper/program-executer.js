const fs = require("fs");
const path = require("path");
const childProcess = require("child_process");
const process = require("process");

const programExecutor = {
  sourceCodeWrite(sourceCode) {
    try {
      const filePath = path.join(
        process.env.SOURCE_CODE_LOCATION,
        "Solution.java"
      );
      fs.writeFileSync(filePath, sourceCode);
      return true;
    } catch (err) {
      console.log("CANNOT CREATE SOLUTION.JAVA FILE ", err);
      throw err;
    }
  },
  compileAndRun(sourceCode) {
    if (programExecutor.sourceCodeWrite(sourceCode)) {
      let phase = "";
      console.log("SOURCE CODE WRITE ON SERVER...");
      const filePath = path.join(
        process.env.SOURCE_CODE_LOCATION,
        "Solution.java"
      );
      console.log('filePath :>> ', filePath);
      const fileName = path.basename(filePath);
      console.log("FiLE NAME ", fileName);
      try {
        phase = "Compilation Fails";
        let result = childProcess.execSync(`javac ${filePath}`);
        console.log("after compile ..... ", result.toString());
        phase = "Execution fails";
        result = childProcess.execSync(
          `cd ${process.env.SOURCE_CODE_LOCATION}
          java ${fileName} `
        );
        console.log('result :>> ', result.toString());
        return { message: "Compilation Success", result: result.toString() };
      } catch (err) {
        console.log(
          "Error is " + err.stderr.toString() + "Type of err " + typeof err
        );
        return { message: phase, details: err.stderr.toString() };
      }
    }
  },
};

module.exports = programExecutor;
