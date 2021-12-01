const { promisify } = require('util');
const path = require('path');

const download = promisify(require('download-git-repo'));
const open = require('open');

const { vueRepo } = require('../config/repo-config');
const { commandSpawn } = require('../utils/terminal');
const { compile, writeToFile, createdir } = require('../utils/utils');
const log = require('../utils/log');

// 添加项目action
const createProjectAction = async (project, other) => {
    log.wating('helps you create your project, please wait a moment~')
    // 1. clone项目
    await download(vueRepo, project, { clone: true });
    // 2. 执行npm install
    const command = process.platform === 'win32' ? 'npm.cmd' : 'npm';
    await commandSpawn(command, ['install'], { cwd: `./${project}` });
    // 3. 运行npm run serve
    commandSpawn(command, ['run', 'serve'], { cwd: `./${project}` });
    // 4. 打开浏览器
    open('http://localhost:8080');
}

// 编辑模版提出来
const handleCompile = async (name, dest, template, filename) => {
    // 1.模版引擎路径
    const templatePath = path.resolve(__dirname, template);
    const result = await compile(templatePath, { name, lowerName: name.toLowerCase() });

    // 写入文件
    createdir(dest);
    const targetPath = path.resolve(dest, filename);
    writeToFile(targetPath, result);
}

// 添加组件的action
const addCompAction = async (name, dest) => {
    handleCompile(name, dest, '../templates/vue-component.ejs', `${name}.vue`);
}


// 添加page和route
const addPageAndRoute = async (name, dest) => {
    addCompAction(name,dest);
    handleCompile(name, dest, '../templates/vue-router.ejs', 'router.js');
}

// 添加store
const addStore = async (name,dest) => {
    handleCompile(name, dest, '../templates/vue-store.ejs', 'store.js');
    handleCompile(name, dest, '../templates/vue-types.ejs', 'types.js');
}

module.exports = {
    createProjectAction,
    addCompAction,
    addPageAndRoute,
    addStore
}
