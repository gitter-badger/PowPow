var fs        = require('fs');
var fstream   = require('fstream');
var tar       = require('tar');
var path      = require('path');

/**
 * Displays all tar files in ~/.powpow/templates/
 */
module.exports = function () {
  var templateDir = path.resolve(process.env.HOME, '.powpow/templates/');
  fs.readdir(templateDir, function(err, files) {
    files.forEach(function(file) {
      file = file.split('.');
      file.pop();
      console.log(file.join('.'));
    });
    process.exit(0);
  });
};
