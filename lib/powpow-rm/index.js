var fs        = require('fs');
var fstream   = require('fstream');
var tar       = require('tar');
var path      = require('path');

/**
 * removesa the tar file of a given name in ~/.powpow/templates/
 *
 * @param path     - (Optional) The desired path to tar.
 * @param name     - The name of the template.
 */
module.exports = function (target) {
  var target   = path.resolve(process.env.HOME, '.powpow/templates/' + target + '.tar');

  // Template should exist.
  fs.exists(target, function(exists) {
    if (exists) { return; }
    console.log('You\re in luck, that template never existed!');
    process.exit(1);
  });

  fs.unlink(target, function(exists) {
    if (exists) { return; }
    console.log('Template removed');
    process.exit(0);
  });
};
