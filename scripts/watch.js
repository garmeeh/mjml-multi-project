const watch = require('node-watch');
const path = require('path');
const log = require('../tools/logger');
const { pickProject } = require('./inquirer');
const { startCompileProcess } = require('./compile');

const startWatch = async () => {
  const { project } = await pickProject();
  const templatePath = `../${project}/templates/`;

  watch(path.resolve(__dirname, templatePath), {}, (evt, filePath) => {
    log.ok(`Recompiling: ${filePath}`);
    startCompileProcess(project, filePath);
  });
  log.info(`Watching ${project} templates...`);
};

module.exports = {
  startWatch
};
