const img_data = require("./data");
const fs = require("fs");

var data = [];

for(let i=0; i<img_data.length; i++) {
    data.push({index: i, path: img_data[i]});
}

fs.writeFileSync('/home/xin/Sublime/Nodejs/Vue/vue-fog/server/data/new_data.js', JSON.stringify(data));