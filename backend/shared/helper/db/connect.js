const mongoose = require("mongoose");
const messageReader = require("../../i18n/message-reader");
const URL = process.env.DB_URL;

mongoose.connect(URL, (err) => {
  if (err) {
    console.log(messageReader("database.crash.message"), err);
  } else {
    console.log(messageReader("database.success.message"));
  }
});

module.exports = mongoose;
