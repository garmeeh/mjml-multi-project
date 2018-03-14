const inquirer = require('inquirer');
const { projects = [] } = require('../projects.config');

module.exports = {
  pickProject: () => {
    return inquirer
      .prompt([
        {
          type: 'list',
          name: 'project',
          message: 'Pick project to work on?',
          choices: projects,
          filter(option) {
            return option.toLowerCase();
          }
        }
      ])
      .then(answers => answers);
  }
};
