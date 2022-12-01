const express = require("express");
require("dotenv").config();
const cors = require("cors");
const messageReader = require("./shared/i18n/message-reader");
const userRoute = require("./modules/user/routes/user-route");
const questionRoute=require('./modules/question/routes/question-route');
const { HOME } = require("./shared/config/constants").ROUTES;
// const { COMPILE_AND_RUN } = require("./shared/config/constants").ROUTES.QUESTION;

const app = express();

app.use(cors());
app.use(express.json());
app.use(HOME, userRoute);
app.use(HOME,questionRoute);

const serverInfo = app.listen(process.env.PORT || 1222, (err) => {
  if (err) {
    console.log(messageReader("server.crash.message"), err);
  } else {
    // console.log(process.env);
    console.log(
      messageReader("server.success.message") + serverInfo.address().port
    );
  }
});
