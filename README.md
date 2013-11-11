POWPOW
======
A cli for automated template directory creation.

*maintained by [Talon Poole](http://theghostin.me)*

## Install

    $ [sudo] npm install powpow -g

## Usage

**NOTE:** PowPow requires sudo in certain instances
because it creates and deletes directories within itself
and its a global script. All options that possibly require sudo are
denoted below with `[sudo]` before the command.

### init [name] [template]

Initialize a new project using a powpow template.

    $ powpow init project-name http-server

### [sudo] add [name] [dir]
Define your own templates

    $ [sudo] powpow add my-template

Or if you're not inside the directory

    $ [sudo] powpow add my-template ../path/to/template

### [sudo] rm [name]

Remove a template

    $ [sudo] powpow rm my-template

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
