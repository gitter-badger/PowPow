POWPOW v0.0.1
======
Automated template directory creation

*maintained by [Talon Poole](http://theghostin.me)*

## Quick Start
sudo if you must:

    # npm install powpow -g

For your ExpressJS websites:

    # powpow -n your-project-name

## Options.

### powpow init [name] [options]

    # powpow -n cool-project-wow

initialize a new project using a powpow template.

    powpow init project-name http-server

### powpow add [name]
Let the user define their own templates.
    powpow add my-template

TODO: add directory selection support.

### powpow rm [name]

removes a template

    powpow rm my-template

### powpow ls

Lists all stored templates.

    powpow ls

## Contribute.

If you have a directory setup for your projects that
you frequently copy and paste for re-use add it to the
[`/powpow`](https://github.com/LegitTalon/powpow/tree/master/powpow)
directory and submit a pull request! :)

### What directory setups are currently available?

Look under [`/powpow`](https://github.com/LegitTalon/powpow/tree/master/powpow)
