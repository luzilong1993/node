const { program } = require('commander');
const {
    createProjectAction,
    addCompAction,
    addPageAndRoute,
    addStore
} = require('./actions')

// 创建指令函数集
const createCommands = () => {
    // 获取传递的参数
    const options = program.opts();

    program
        .command('create <project> [others...]')
        .description('clone a repository into a folder')
        .action(createProjectAction)

    program
        .command('addcomp <name>')
        .description('add vue component,例如cordSim addcomp HelloWorld [-d src/component]')
        .action((name) => {
            addCompAction(name, options.destination || 'src/components')
        })

    program
        .command('addpage <page>')
        .description('add vue page and router config,例如: cordSim addpage Home [-d src/pages]')
        .action((page) => {
            addPageAndRoute(page, options.destination || `src/pages/${page.toLowerCase()}`)
        })

    program
        .command('addstore <store>')
        .description('add vue store and types config,例如: cordSim addstore home [-d src/store/modules/home]')
        .action((store) => {
            addStore(store, options.destination || `src/store//modules/${store.toLowerCase()}`)
        })
}

module.exports = createCommands;
