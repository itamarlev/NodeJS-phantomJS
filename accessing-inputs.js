//import resources
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

console.log('starting accessing-inputs.js');

//const notes = require('./notes');

const argv = yargs.argv;
var command = process.argv[2];
console.log(`command: ${command}`);
console.log(`process argv: ${process.argv}`);
console.log(`yarg: ${argv}`);

if (command === 'add') {
    console.log('adding');
} else if (command === 'remove') {
    console.log('removing');
} else if (command === 'read') {
    console.log('reading')
} else {
    console.log('do nothing');
}


