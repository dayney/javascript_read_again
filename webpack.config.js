const path = require('path');
const fs = require('fs');

// 做成多入口的文件
let multiEntry = {};
console.log('多入口的文件::' + multiEntry);
console.log(multiEntry);

const assetsUrl = path.join(__dirname, "es6-features-20180618/");  // 目标资源的存放目录
const distURL = path.join(__dirname, "/dist");   // 最终生的资源的存放位置

function travel(dir) {
  let obj = {};
  fs.readdirSync(dir).forEach(function (file) {
    let temArr = file.split('.');
    if(temArr.length > 1) {
      let fileName = temArr[0];
      let fileExtended = temArr[1];
      obj[fileName] = assetsUrl + file;
    }
    // let fileName = temArr[0];
    // let fileExtended = temArr[1];
    // obj[fileName] = assetsUrl + file;

      // var pathname = path.join(dir, file);

      // if (fs.statSync(pathname).isDirectory()) {
      //     travel(pathname, callback);
      // } else {
      //     callback(pathname);
      // }
  });
  return obj;
};

multiEntry = travel(assetsUrl);
console.log(multiEntry);

module.exports = {
  mode: "production", // "production" | "development" | "none"
  entry: multiEntry,
  output: {
    path: distURL,
    filename: "[name].js"
  }
  // },
  // devServer: {
  //   contentBase: distURL,
  //   compress: false,
  //   port: 9000
  // }
}
