const  chalk = require('chalk');

const wating = (...info) => {
    console.log(chalk.blue(...info));
}

const error = (...info) => {
    console.log(chalk.red(...info));
}

const clear = () => {
    console.clear();
}

module.exports = {
    wating,
    error,
    clear
}