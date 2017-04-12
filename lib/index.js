/** 
 * API entry point.
 *
 *     Copyright boilerplate (grab from wiki)
 *     License reference
 *
 * @fileOverview This is the main entry point into the package.
 */

// http://eslint.org/docs/rules/
const os = require('os');

/* eslint-disable no-alert, no-console */
// http://eslint.org/docs/user-guide/configuring#extending-configuration-files
console.log('Playground says hello...');
console.log('os='+os.arch());
console.log('cpuCount='+getCpus());


/**
 * @return number of cpus 
 */
function getCpus() {
    return os.cpus.length;
}
