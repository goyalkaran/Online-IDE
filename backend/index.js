const express = require("express");
require('dotenv').config();
const messageReader=require('./shared/i18n/message-reader');
const userRoute = require("../backend/modules/user/routes/user-route");
const {HOME}=require('./shared/config/constants').ROUTES;
const app = express();
app.use(express.json());
app.use(HOME,userRoute);

const serverInfo=app.listen(process.env.PORT || 1222, (err) => {
  if (err) {
    console.log(messageReader('server.crash.message'),err);
  } else {
    console.log(process.env);
    console.log(messageReader('server.success.message')+serverInfo.address().port);
  }
});
