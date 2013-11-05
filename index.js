#!/usr/bin/env node

/*
 * POWPOW v0.0.1
 *
 * Automated template directory creation.
 */
var ncp = require("ncp").ncp
  , program = require("commander")
  , path = require("path")
  , fs = require("fs")
  , powpow = path.dirname(require.main.filename) + "/powpow/"
  , inform = function (info) {
      console.log("\n### POWPOW INFO ###");
      info.forEach(function (info) {
        console.log(info)
      });
      console.log("###################\n");
    }

  , warn = function (warn) {
      console.log("\n### POWPOW WARNING ###");
      warn.forEach(function (warn) {
        console.log(warn)
      });
      console.log("###################\n");
    };


program.version("0.0.1");

/*
 * ## powpow init [name] [template]
 *
 * initialize a new project using
 * a powpow template.
 *
 *     powpow init project-name http-server
 */
program
  .command("init [name] [template]")
  .usage("- takes a template from powpow and places it in the current dir.")
  .action(function (name, template) {
    if (!template) {
      template = "http-server";
    }
    if (!name) {
      warn([
        "must provide a project name.\nex. 'powpow create cool-website'",
        "\nrun 'powpow -h' for more help."
      ]);
      return false;
    }

    var from = path.resolve(powpow + template)
      , to = path.resolve(process.cwd(), name);

    ncp(from, to, function (err) {
      if (err) {
        warn([
          err.message
        ]);
      };

      inform([
        "Type 'cd " + name + " and start hacking.'"
      ]);
    });
  });

/*
 * ## powpow add [name] [dir]
 *
 * Let the user define their own templates.
 *
 *     powpow add my-template
 *
 * or if you're not inside the directory
 *
 *     powpow add my-template ../path/to/template
 */
program
  .command("add [name] [dir]")
  .usage("- must be run at the root of the dir you want to make a template or a valid path to your template directory should be provided.")
  .action(function (name, dir) {

    var to = path.resolve(powpow + name)
      , from = process.cwd();

    if (dir) {
      from = path.resolve(process.cwd(), dir);
    }

    if (!name) {
      warn([
        "must provide a project name.\nex. 'powpow add template-website'",
        "\nrun 'powpow -h' for more help."
      ]);
      return false;
    }

    ncp(from, to, function (err) {
      if (err) {
        warn([
          err.message
        ]);
      };

      inform([
        "Your template '" + name + "' was created.",
        "You may now use 'powpow init [name] " + name + "'"
      ]);
    });
  });

/*
 * ## powpow rm [name]
 *
 * removes a template.
 *
 *     powpow rm my-template
 */
program
  .command("rm [name]")
  .usage("- removes the template matching the provided name. Requires -f or --force.")
  .option("-f, --force", "force this operation to complete.")
  .action(function (name) {

    rm = function(path, cb) {
      if(fs.existsSync(path)) {

        files = fs.readdirSync(path);
        files.forEach(function(file, index){
          var curPath = path + "/" + file;
          if(fs.statSync(curPath).isDirectory()) { // recurse
            rm(curPath);
          } else { // delete file
            fs.unlinkSync(curPath);
          }
        });
        fs.rmdirSync(path);
        inform([
          "Your template '" + name + "' was deleted."
        ]);
      } else {
        warn([
          "That template doesn't exist."
        ]);
      }
    };

    if (program.force) {
      rm(path.resolve(powpow, name));
    } else {
      warn([
        "You must use -f or --force to complete this operation.",
        "Ex. 'powpow rm -f my-template'"
      ]);
    }
  });

/*
 * ## powpow ls
 *
 * Lists all stored templates.
 *
 *     powpow ls
 */
program
  .command("ls")
  .usage("- lists all the templates stored in powpow.")
  .action(function () {
    inform([
      "A list of templates you currently have stored.",
      "Use 'powpow rm [name]' to delete",
      "and 'powpow add [name]' to add"
    ]);
    fs.readdir(powpow, function (err, files) {

      if (err) {
        warn([
          err.message
        ]);
      };

      files.forEach(function (files) {
        console.log(files)
      });
      console.log("");
    });
  });

program.parse(process.argv);
