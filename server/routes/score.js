var express = require('express');
var fs = require('fs');
var path = require('path');
var scoreModel = require('../model/scoreModel');
const img_data = require('../data/data');

var scoreRouter = express.Router();


/* GET users listing. */
scoreRouter.get('/', (req, res) => {
  let image = base64Img(img_data[0].path);
  res.send({status: true, image});
})

scoreRouter.post('/', async function(req, res, next) {
  let username = req.body.username;
  let score = req.body.score;
  let index = req.body.index;
  await scoreModel.update({username}, {'$push':{list: score}});
  if(index >= 300) {
    res.send({status: false, msg: "辛苦了！你已完成全部工作！"});
  }
  else{
    let image = base64Img(img_data[index].path);
    res.send({status: true, image});
  }
});

function base64Img(file) {
  // get file suffix
  let suffix = path.extname(file);
  let prefix = `data:image/${suffix.replace('.', '')};base64,`;
  // read binary data
  let bitmap = fs.readFileSync(file);
  // convert binary data to base64 string
  let base64 = bitmap.toString('base64');
  return prefix + base64;
}

module.exports = scoreRouter;
