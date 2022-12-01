const {compileAndRun}=require('../controllers/question-controller');
const express=require('express');
const {COMPILE_AND_RUN}=require('../../../shared/config/constants').ROUTES.QUESTION;
const routes=express.Router();
routes.post(COMPILE_AND_RUN,compileAndRun);
module.exports=routes;