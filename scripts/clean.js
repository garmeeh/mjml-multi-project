const rimraf = require('rimraf');
const { confirm } = require('./inquirer');
const log = require('../tools/logger');

const toRemove = [
  'cuppas',
  '.all-contributorsrc',
  'CONTRIBUTING.md',
  'LICENSE',
  '.git'
];

async function cleanUp() {
  log.info(
    'You are about to clean this project. Doing so will remove the example project, delete the Git folder so that you can start fresh. This can not be reversed!'
  );
  const { confirmation } = await confirm();
  if (confirmation === 'yes') {
    toRemove.forEach(remove => {
      try {
        rimraf(remove, () => {
          log.info('...cleaning..');
        });
      } catch (e) {}
    });
  } else {
    log.ok(`Clean Up Canceled`);
  }
}

module.exports = {
  cleanUp
};
