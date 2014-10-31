var fs        = require('fs');
var fstream   = require('fstream');
var path      = require('path');
var chalk     = require('chalk');

/**
 * Displays all tar files in ~/.powpow/templates/
 */
module.exports = function () {
  var templateDir = path.resolve(process.env.HOME, '.powpow/templates/');
  console.log('\n' + chalk.magenta.underline('~* PowPow *~'));
  fs.readdir(templateDir, function(err, files) {
    files.forEach(function(file) {
      file = file.split('.');
      file.pop();
      console.log(chalk.white(' * ' + file.join('.')));
    });
    console.log('');
    process.exit(0);
  });
};
