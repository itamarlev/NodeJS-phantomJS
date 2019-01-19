const fs = require('fs');
const yargs = require('yargs');
const {gzip, ungzip} = require('node-gzip');

const argv = yargs.argv;
var command = argv._[0];

console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {

