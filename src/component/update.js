"use strict";
const execSync = require('child_process').execSync;
const path = require('path');
const fs = require('fs');
console.log('------------ 开发自动升级package.json版本号 ------------');
const projectPath = path.join(__dirname, './');
const packageJsonStr = fs.readFileSync('./package.json').toString();
try {
    const packageJson = JSON.parse(packageJsonStr);
    // 升级版本号
    const arr = packageJson.version.split('.');
    if (arr[2] < 99) {
        arr[2] = +arr[2] + 1;
    }
    else if (arr[1] < 9) {
        arr[1] = +arr[1] + 1;
        arr[2] = 0;
    }
    else {
        arr[0] = +arr[0] + 1;
        arr[1] = 0;
        arr[2] = 0;
    }
    const newVersion = arr.join('.');
    packageJson.version = newVersion;
    // console.log(packageJson);
    fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, '\t'));
}
catch (e) {
    console.error('处理package.json失败，请重试', e.message);
    process.exit(1);
}
