const { program } = require('commander');

const helpOptions = () => {
    // 增加自己的options
    program.option('-c, --code', 'a codeSim cli')
        .option('-d, --destination <destination>', 'a destination folder, 例如:-d /src/components')
        .option('-f, --framework <framework>', 'your work framework');

    // 监听help指令
    program.on('--help', function () {
        console.log('');
        console.log('Others:');
        console.log(' other options~');
    })

    
    // console.log(options.destination);
}

module.exports = helpOptions;