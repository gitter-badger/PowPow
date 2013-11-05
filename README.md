POWPOW
======
Automated template directory creation

*maintained by [Talon Poole](http://theghostin.me)*

## Quick Start
Sudo if you must:

    $ npm install powpow -g

For your ExpressJS websites:

    $ powpow -n your-project-name

## Options.

### init [name] [template]

    $ powpow init cool-project-wow

Initialize a new project using a powpow template.

    $ powpow init project-name http-server

### add [name] [dir]
Define your own templates

    $ powpow add my-template

Or if you're not inside the directory

    $ powpow add my-template ../path/to/template

### rm [name]

Remove a template

    $ powpow rm my-template

But that won't actually work. You have to force it.

    $ powpow rm -f my-template 

### ls

List all stored templates.

    $ powpow ls

## Contribute.

If you have a directory setup for your projects that
you frequently copy and paste for re-use add it to the
[`/powpow`](https://github.com/LegitTalon/powpow/tree/master/powpow)
directory and submit a pull request! :)

### What directory setups are currently available?

Look under [`/powpow`](https://github.com/LegitTalon/powpow/tree/master/powpow)

Or add your own!
