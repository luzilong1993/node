const { promisify } = require('util');

const download = promisify(require('download-git-repo'));
const open = require('open');

const { vueRepo } = require('../config/repo-config');
const { commandSpawn } = require('../utils/terminal');
const { compile } = require('../utils/utils');

// 添加项目action
const createProjectAction = async (project, other) => {
    console.log('%cwating~~~', 'color:#ff0000');
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

// 添加组件的action
const addCompAction = async (name, dest) => {
    // 编译ejs模版 result
    const result = await compile('vue-component.ejs', { name, lowerName: name.toLowerCase() });
    
    // 3.将result放入到.vue中
    // 4.放到对应的文件夹中
}

module.exports = {
    createProjectAction,
    addCompAction
}
