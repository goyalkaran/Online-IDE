const { compileAndRun } = require("../helper/program-executer");
const { SUCCESS } =require("../../../shared/config/constants").HTTP_STATUS_CODES;

module.exports = {
  compileAndRun(request, response) {
    const body = request.body;
    console.log(("body is :: ", body));
    const code = body.code;
    console.log("Code rec ", code);
    const json = compileAndRun(code);
    response.status(SUCCESS).json(json);
  },
};
