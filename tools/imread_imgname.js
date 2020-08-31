const dir = require("node-dir");
const fs = require('fs');

const basic_path = "/home/xin/D/Algorithm_Project/Fog/Real_Background/20191129/IMAGE_ALL/";
let files = dir.files(basic_path, {sync:true});
files.sort((item1, item2) => {
    let temp1 = item1.split("img")[1];
    temp1 = temp1.split("_")[0];
    let temp2 = item2.split("img")[1];
    temp2 = temp2.split("_")[0];
    return temp1 - temp2;
});

trains = files.slice(0, 200);
tests = files.slice(200);

trains.sort(() => {
    return (0.5-Math.random());
});
tests.sort(() => {
    return (0.5-Math.random());
});

random_res = trains.concat(tests);

for(let i=0; i<trains.length; i++) {
    fs.appendFileSync("/home/xin/D/Algorithm_Project/Fog/Real_Background/20191129/Path_Score/train_path.txt", `${trains[i]}\n`);
}

for(let i=0; i<tests.length; i++) {
    fs.appendFileSync("/home/xin/D/Algorithm_Project/Fog/Real_Background/20191129/Path_Score/test_path.txt", `${tests[i]}\n`);
}

for(let i=0; i<random_res.length; i++) {
    fs.appendFileSync("/home/xin/D/Algorithm_Project/Fog/Real_Background/20191129/Path_Score/random_res_path.txt", `${random_res[i]}\n`);
}

fs.writeFileSync('/home/xin/Sublime/Nodejs/Vue/vue-fog/server/data/data.js', JSON.stringify(random_res));