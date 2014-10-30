# JSON directory structure

Strings are file contents objects are directories.

{
  "file-at-root.js": "//this is the\n//root file",
  "css": {
    "style.css": "body {text-align: center;}"
  }
}

# new

```
powpow new [template] [path]
```

Create the specifed directory template at the specified path.

[path] defaults to the current working directory.

# add

```
powpow add [path] [name]
```

Add a new template to powpow.

[path] must be a directory or valid JSON directory format.
[name] name the template. Defaults to filename.

# rm
```
powpow rm [template]
```

Remove a template from powpow.

[name] name of a template.

# ls
```
powpow ls
```

Lists all templates.
