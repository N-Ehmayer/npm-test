var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);

console.log(chalk.blue.bgRed.bold('Hello world!'));
console.log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

console.log(chalk.black.underline.bold("Nic"));