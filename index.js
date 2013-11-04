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

/*
 * Create a reference to the program directory/powpow folder
 * where the template directories are stored.
 */
  , powpow = path.dirname(require.main.filename) + "/powpow/"

/*
 * Create a reference to the current working directory.
 */
  , here = process.cwd() + "/";

program.version("0.0.1")

/*
 * ## powpow init [name] [options]
 *
 * initialize a new project using
 * a powpow template.
 *
 * `powpow init project-name -t http-server`
 */
program
  .command("init [name] [template]")
  .action(function (name, template) {
    if (!template) {
      template = "http-server";
    }

    var from = path.resolve(powpow + template)
    , to = here + name;

    /*
     * Require name ex. `powpow init project-name`
     */
    if (!name) {
      console.log("\n### POWPOW ERROR ###");
      console.log("must provide a project name.\nex. 'powpow create cool-website'")
      console.log("\nrun 'powpow -h' for more help.");
      console.log("####################\n");;
      return false;
    }

    ncp(from, to, function (err) {
      if (err) {

    /*
     * If there's an error log it.
     */
        console.log("\n### POWPOW ERROR ###");
        console.log(err);
        console.log("####################\n");
      };

    /*
     * Provide helpful instructions upon directory completion.
     */
      console.log("\n### POWPOW INFO ###");
      console.log("Type 'cd " + name + " && npm install'");
      console.log("Then 'npm start' and your project will be ready to hack.");
      console.log("###################\n");
    });
  });

/*
 * ## powpow add [name]
 *
 * Let the user define their own templates.
 *
 * `powpow add my-template`
 */
program
  .command("add [name]")
  .action(function (name) {

    var from = process.cwd()
    , to = path.resolve(powpow + name);

    /*
     * Require name ex. `powpow add project-name`
     */
    if (!name) {
      console.log("\n### POWPOW ERROR ###");
      console.log("must provide a project name.\nex. 'powpow add template-website'")
      console.log("\nrun 'powpow -h' for more help.");
      console.log("####################\n");;
      return false;
    }

    ncp(from, to, function (err) {
      if (err) {
        console.log("\n### POWPOW ERROR ###");
        console.log(err);
        console.log("####################\n");
      };

    /*
     * Provide helpful instructions upon directory completion.
     */
      console.log("\n### POWPOW INFO ###");
      console.log("Your template " + name + " was created.");
      console.log("You may now use 'powpow init project-name -t " + name + "'");
      console.log("###################\n");
    });
  });

/*
 * ## powpow ls
 *
 * Lists all stored templates.
 */
program
  .command("ls")
  .action(function () {
    fs.readdir(powpow, function (err, files) {

      if (err) {
        console.log("\n### POWPOW ERROR ###");
        console.log(err);
        console.log("####################\n");
      };


      for(i in files) {
        console.log(files[i]);
      }
    });
  });

/*
 * ## powpow rm [name]
 *
 * removes a template.
 *
 * `powpow rm my-template`
 */
program
  .command("rm [name]")
  .action(function (name) {

    /*
     * rm is a recursive nodeJS rmdir function
     * currently sync
     */
    rm = function(path, cb) {
      if(fs.existsSync(path)) {

        // TODO: PROMPT USER TO ACCEPT.

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
        console.log("\n\n### POWPOW INFO ###");
        console.log("Your template " + name + " was deleted.");
        console.log("###################");
      } else {
        console.log("\n### POWPOW ERROR ###");
        console.log("That template doesn't exist.");
        console.log("####################\n");
      }
    };

    rm(path.resolve(powpow, name));
  });


program.parse(process.argv);
