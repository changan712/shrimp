const fs = require('fs');
const mimes = require('./mime');

module.exports = function walk(reqPath) {

    let files = fs.readdirSync(reqPath);
    let dirList = [],
        fileList = [];

    for (let i = 0, len = files.length; i < len; i++) {
        let item = file[i];
        let itemArr = item.split("\.");
        let itemMime = itemArr.length > 1 ? itemArr[itemArr.length - 1] : 'undfinded'

        if (typeof mimes[itemMime] === "undefined") {
            dirList.push(files[i]);
        } else {
            fileList.push(files[i]);
        }

    }
    let result = dirList.concat(fileList);
    return result;
}