const messageReader = require("../../../shared/i18n/message-reader");
const { SUCCESS, SERVER_ERROR } =
  require("../../../shared/config/constants").HTTP_STATUS_CODES;
const userOperations = require("../db/repository/user-operations");
module.exports = {
  async oAuth(request, response) {
    const userData = request.body;
    console.log("body ", body);
    try {
      const doc = await userOperations.add(userData);
      response
        .status(SUCCESS)
        .json({ message: messageReader("welcome.message"), userInfo: doc });
    } catch (err) {
      response
        .status(SERVER_ERROR)
        .json({ message: messageReader("oAuth.crash.message") });
      console.log("oAuth err", err);
    }
  },
};
