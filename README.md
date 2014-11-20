# PowPow
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/LegitTalon/PowPow?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Template Directory Automation.

PowPow saves directories on your filesystem to be recreated at another time.
This is ideal for scaffolding out the perfect beginning point to your project
and saving that for later use!

```
npm install -g powpow
```

# How

## new

```
powpow new [template] [path]
```

Create the specifed directory template at the specified path.

[path] defaults to the current working directory.

## add

```
powpow add [path] [name]
```

Add a new template to powpow.

[path] must be a directory.
[name] name the template. Defaults to filename.

## rm
```
powpow rm [template]
```

Remove a template from powpow.

[name] name of a template.

## ls
```
powpow ls
```

Lists all templates.
