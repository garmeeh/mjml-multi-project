const chalk = require('chalk');

module.exports = {
  ok: (...params) => console.log(chalk.yellowBright(...params)),
  info: (...params) => console.log(chalk.cyan(...params)),
  error: (...params) => console.log(chalk.bold.red(...params)),
  warning: (...params) => console.log(chalk.keyword('orange')(...params)),
  log: (...params) => console.log(chalk.white(...params))
};
