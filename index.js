#!/usr/bin/env node

// jshint laxcomma: true

/*
 * POWPOW
 *
 * Automated template directory creation.
 */
var ncp = require("ncp").ncp
  , program = require("commander")
  , prompt = require("prompt")
  , path = require("path")
  , fs = require("fs")
  , powpow = path.dirname(require.main.filename) + "/powpow/"

/*
 * Pretty printing for console.log
 */
  , inform = function (info) {
      console.log("\n### POWPOW INFO ###");
      info.forEach(function (info) {
        console.log(info);
      });
      console.log("###################\n");
    }
  , warn = function (warn) {
      console.log("\n### POWPOW WARNING ###");
      warn.forEach(function (warn) {
        console.log(warn);
      });
      console.log("######################\n");
    };


program.version("0.0.3");

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
  .description("initialize a template in the current dir")
  .action(function (name, template) {
    if (!template) {
      warn([
          "must provide a template name."
        , "ex. 'powpow create cool-website my-template'"
        , "run 'powpow ls' to see available templates."
        , "\nrun 'powpow -h' for more help."
      ]);
      process.exit(1);
    }
    if (!name) {
      warn([
          "must provide a project name."
        , "ex. 'powpow create cool-website'"
        , "\nrun 'powpow -h' for more help."
      ]);
      process.exit(1);
    }

    var from = path.resolve(powpow, template)
      , to = path.resolve(process.cwd(), name);

    ncp(from, to, function (err) {
      if (err) {
        warn([
          err.message
        ]);
        process.exit(1);
      }

      inform([
        "Template initialized",
        "Type 'cd " + name + " and start hacking.'"
      ]);
    });
  });

/*
 * ## [sudo] powpow add [name] [dir]
 *
 * Let the user define their own templates.
 *
 *     [sudo] powpow add my-template
 *
 * or if you're not inside the directory
 *
 *     [sudo] powpow add my-template ../path/to/template
 */
program
  .command("add [name] [dir]")
  .description("add a template to powpow")
  .action(function (name, dir) {

    var to = path.resolve(powpow + name)
      , from = process.cwd()
      , property = {
          name: 'cont',
          message: 'Override existing template?',
          validator: /y[es]*|n[o]?/,
          warning: 'Must respond yes or no',
          default: 'no'
        };

    if (dir) {
      from = path.resolve(process.cwd(), dir);
    }

    if (!name) {
      warn([
          "must provide a project name.\nex. 'powpow add template-website'"
        , "\nrun 'powpow -h' for more help."
      ]);
      return false;
    }

    prompt.get(property, function (err, res) {
      if (res.match(/n[o]/)) {
        process.exit(1);
      }
      ncp(from, to, function (err) {
        if (err) {
          warn([
            err.message
          ]);
          process.exit(1);
        }
        if (!fs.existsSync(path.resolve(powpow, name))) {
          warn([
            "Operation failed. Try using sudo."
          ]);
          process.exit(1);
        }
        inform([
            "Your template '" + name + "' was created."
          , "You may now use 'powpow init [name] " + name + "'"
        ]);
      });
    });
  });

/*
 * ## [sudo] powpow rm [name]
 *
 * removes a template.
 *
 *     powpow rm my-template
 */
program
  .command("rm [name]")
  .description("remove a template from powpow. Must use -f or --force")
  .option("-f, --force", "force this operation to complete.")
  .action(function (name, program) {

    var rm = function (path) {
      fs.exists(path, function (pathExists) {
        if (!pathExists) {
          warn([
              "That template doesn't exist."
            , "\nUse 'powpow ls' to show existing templates."
          ]);
          process.exit(1);
        }

        fs.readdir(path, function (err, files){
          files.forEach(function (file) {
            var curPath = path + "/" + file;
            fs.stat(curPath, function (err, stats) {
              if (stats.isDirectory()) {
                rm(curPath);
              } else {
                fs.unlink(curPath)
              }
            });
          });
          fs.rmdir(path);
        });
      });
    };

    var property = {
      name: 'cont',
      message: 'are you sure?',
      validator: /y[es]*|n[o]?/,
      warning: 'Must respond yes or no',
      default: 'no'
    };
    prompt.start();
    prompt.get(property, function (err, res) {
      console.log(res.cont);
      console.log(res.cont.match(/n[0]/) === null);
      if (/n[o]/.test(res.cont)) {
        return false;
      }
      try {
        rm(path.resolve(powpow, name));
      } catch (e) {
        warn([
          "Operation failed. Try using sudo."
        ]);
        process.exit(1);
      }
      inform([
        "Your template '" + name + "' was deleted."
      ]);
    });
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
  .description("lists all the templates stored in powpow.")
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
      }

      files.forEach(function (files) {
        console.log(files);
      });
      console.log("");
    });
  });

program.parse(process.argv);
