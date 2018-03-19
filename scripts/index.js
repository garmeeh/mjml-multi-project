const program = require('commander');
const clear = require('clear');
const figlet = require('figlet');
const chalk = require('chalk');
const log = require('../tools/logger');

const { startCompileProcess } = require('./compile');
const { startWatch } = require('./watch');
const { cleanUp } = require('./clean');
const { createProject } = require('./create');

program
  .option('-c --compile', 'Compile Project')
  .option('-ca --compileAll', 'Compile All Projects')
  .option('-w --watch', 'Watch & Compile')
  .option('-cl --clean', 'Clean Up')
  .option('-cp --createProject', 'Create Project')
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

if (program.createProject) {
  if (program.args.length === 1 && typeof program.args[0] === 'string') {
    createProject(program.args[0]);
  } else {
    log.error(
      'Please ensure you are passing in a project name. (ie: yarn create-project "frostys") '
    );
  }
}
