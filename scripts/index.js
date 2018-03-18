const program = require('commander');
const clear = require('clear');
const figlet = require('figlet');
const chalk = require('chalk');

const { startCompileProcess } = require('./compile');
const { startWatch } = require('./watch');
const { cleanUp } = require('./clean');

program
  .option('-c --compile', 'Compile Project')
  .option('-c --compileAll', 'Compile All Projects')
  .option('-w --watch', 'Watch & Compile')
  .option('--clean', 'Clean Up')
  .parse(process.argv);

clear();

console.log(
  chalk.yellow(
    figlet.textSync('Emails with MJML', { horizontalLayout: 'full' })
  )
);

if (program.compile) {
  startCompileProcess();
}

if (program.compileAll) {
  startCompileProcess('all');
}

if (program.watch) {
  startWatch();
}

if (program.clean) {
  cleanUp();
}
