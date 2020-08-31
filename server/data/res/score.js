const fs = require('fs');

const ckx = require('./ckxin');
const thr = require('./thrui');
const xsd = require("./xsdun");

var score_new = [];

for(let i=0; i<ckx.length; i++) {
    let tmp = (ckx[i]+thr[i]+xsd[i]) / 3;
    score_new.push(tmp);
};

for(let i=0; i<score_new.length; i++) {
    fs.appendFileSync("score_new.txt", `${score_new[i]}\n`);
}