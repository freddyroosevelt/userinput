/*

Getting a user firstname and lastname input via the command line.
Validating and Requiring input with --help commands

Make sure you first run: npm install for node modules


--- Command line commands --
#1. The app.js help command: node app.js hello --help
#2. How to add user/username in terminal: node app.js hello --name Mr --lastname Robot
#3. show help commands: node app.js --help

*/

var argv = require('yargs')
    .command('hello', 'Greet the user', function(yargs) {
        yargs.options({
            name: {
                demand: true,
                alias: 'n',
                description: 'Your first name goes here',
                type: 'string'
            },
            lastname: {
                demand: true,
                alias: 'l',
                description: 'Your last name goes here',
                type: 'string'
            }
        }).help('help');
    })
    .help('help')
    .argv;

var command = argv._[0];

console.log(argv);

if(command === 'hello' && typeof argv.name !== 'undefined' && typeof argv.lastname !== 'undefined') {
    console.log('Hello ' + argv.name + ' ' + argv.lastname + '!');
}else if (command === 'hello' && typeof argv.name !== 'undefined') {
    console.log('Hello ' + argv.name + '!');
}else if (command === 'hello') {
    console.log('Hello World');
}
