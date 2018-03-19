const path = require('path');
const mkdirp = require('mkdirp');
const fs = require('fs');
const log = require('../tools/logger');

function createProject(projectName) {
  const cleanProjectName = projectName.toLowerCase().replace(/[^a-zA-Z]/g, '');
  const rootPath = path.resolve(__dirname, '../');
  const newProjectPath = `${rootPath}/${cleanProjectName}`;
  const directoriesToCreate = ['', 'templates', 'COMPILED_TEMPLATES', 'common'];

  if (fs.existsSync(newProjectPath)) {
    log.warning(`Sorry, ${cleanProjectName}, already exists.`);
    return;
  }

  try {
    directoriesToCreate.forEach(directory => {
      mkdirp(`${newProjectPath}/${directory}`, error => {
        if (error) {
          throw new Error('Issue Creating New Project');
        }
      });
    });
  } catch (error) {
    log.error(error);
    return;
  }

  log.ok(`${cleanProjectName} was successfully created.`);
  log.info(
    `Don't forget to add ${cleanProjectName} to projects in projects.config.js`
  );
}

module.exports = {
  createProject
};
