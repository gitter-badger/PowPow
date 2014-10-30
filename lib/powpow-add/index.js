var fs        = require('fs');
var fstream   = require('fstream');
var tar       = require('tar');
var path      = require('path');

/**
 * creates a tar file of a given folder in ~/.powpow/templates/
 *
 * @param path     - (Optional) The desired path to tar.
 * @param name     - The name of the template.
 */
module.exports = function (target, name) {
  var target   = path.resolve(target);
  var dest     = fs.createWriteStream(
    path.resolve(process.env.HOME, '.powpow/templates/', name + '.tar')
  );

  var packer   = tar.Pack({noProprietary: true})
    .on('error', function(err) {
      console.log(err);
      process.exit(1);
    })
    .on('end', function() {
      console.log('Template', name, 'added to PowPow.');
      process.exit(0);
    });

  // Template should exist.
  fs.exists(target, function(exists) {
    if (exists) { return; }
    console.log('Please select a folder to use.');
    process.exit(1);
  });

  fstream.Reader({ path: target, type: "Directory" })
    .pipe(packer)
    .pipe(dest);

};
