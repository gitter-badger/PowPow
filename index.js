#!/usr/bin/env node

/*
 * POWPOW v0.0.1-alpha
 * **Under construction**
 *
 * Copy the correct directory from `/powpow`
 * to the given path or current working directory.
 * Using the name provided as the directory name.
 */

var ncp = require("ncp").ncp
  , program = require("commander")
  , path = require("path")
  , powpow = path.dirname(require.main.filename) + "/powpow/"
  , here = process.cwd() + "/"
  , destination = null;

program
  .version("0.0.1")
  .usage("-n [name] [options]")
  .option("-n, --name [name]", "REQUIRED - the name of the project")
  .option("-d, --destination [path]", "the desired destination", process.cwd())
  .option("-t, --type [type]", "the type of setup", "http-server")

program.parse(process.argv)

if (!program.args.length) {
  program.help();
}

var from = path.resolve(powpow + program.type)
  , to = here + program.name;


ncp(from, to, function (err) {
  if (err) {
    console.log("ERROR");
    console.log(err);
  };
});
