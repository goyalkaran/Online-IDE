const express = require("express");
const { oAuth } = require("../controller/user-controller");
const { OAUTH } = require("../../../shared/config/constants").ROUTES.USER;
const routes = express.Router();

routes.post(OAUTH, oAuth);

module.exports = routes;
