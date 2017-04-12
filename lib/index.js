/** 
 * API entry point.
 *
 *     Copyright boilerplate (grab from wiki)
 *     License reference
 *
 * @fileOverview This is the main entry point into the package.
 */
const http = require('http');
const os = require('os');

console.log('Playground says hello...')
console.log('os='+os.arch());
console.log('cpuCount='+getCpus());


/**
 * @return number of cpus 
 */
function getCpus() {
    return os.cpus.length;
}
