var fs   = require('fs');
var tar  = require('tar');
var path = require('path');

/**
 * Untars the template in the directory given or the current directory.
 *
 * @param template - The name of the template.
 * @param path     - (Optional) The desired path to populate.
 */
module.exports = function (template, dest) {
  var dest     = dest || './';
  var template = path.resolve(process.env.HOME, '.powpow/templates/', template + '.tar');

  // Template should exist.
  fs.exists(template, function(exists) {
    if (exists) { return; }
    console.log('That template doesn\'t exist.');
    process.exit(1);
  });

  fs.createReadStream(template)
    .pipe(tar.Extract({path: dest}));

};
