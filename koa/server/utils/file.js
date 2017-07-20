const fs = require('fs');

module.exports = (filePath)=>{
    let content = fs.readFileSync(filePath,'binary');
    return content;
}