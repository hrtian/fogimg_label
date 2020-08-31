var express = require('express');
var usernameModel = require('../model/usernameModel');
var scoreModel = require('../model/scoreModel');

var loginRouter = express.Router();


/* GET home page. */
loginRouter.post('/', async (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  let item = await usernameModel.findOne({username});
  if(item !== null) {
    res.send({status: false, msg: "该用户名已注册"});
  } else {
    if(password === "lab543"){
      let temp_username_model = new usernameModel({username});
      let temp_score_model = new scoreModel({username, list:[]});
      await temp_username_model.save();
      await temp_score_model.save();
      res.send({status: true, msg: "登陆成功"});
    } else {
      res.send({status: false, msg: "密码错误"});
    }
      
  }
});

module.exports = loginRouter;
