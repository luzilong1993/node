const { program } = require('commander');
const {
    createProjectAction,
    addCompAction
} = require('./actions')

// 创建指令函数集
const createCommands = () => {
    program
        .command('create <project> [others...]')
        .description('clone a repository into a folder')
        .action(createProjectAction)

    program
        .command('addcomp <name>')
        .description('add vue component,例如cordSim addcomp HelloWorld -d src/component')
        .action(addCompAction)
}

module.exports = createCommands;
