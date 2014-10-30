#!/usr/bin/env node
var powpow = require('nomnom');

powpow
  .script('powpow');

powpow
  .command('new')
  .help('Creates a directory structure from a template.')
  .option('template', {
    position: 1,
    required: true,
    help: 'The name of the desired template.'
  })
  .option('path', {
    position: 2,
    default: './',
    help: 'The directory to populate. Defaults to the current working directory.'
  });

powpow
  .command('add')
  .help('Adds a template.')
  .option('path', {
    position: 1,
    required: true,
    help: 'Must be a directory or a tarball.'
  })
  .option('name', {
    position: 2,
    help: 'Name of the template. Defaults to the file or folder name.'
  });

powpow
  .command('rm')
  .help('Removes templates.')
  .option('template', {
    position: 1,
    list: true,
    required: true,
    help: 'The name(s) of the template(s) to remove.'
  });

powpow
  .command('ls')
  .help('Lists all templates.');

var opts = powpow.nom();

switch (opts[0]) {
  case 'new':
    require('../lib/powpow-new')(opts.template, opts.path);
    break;
  case 'add':
    require('../lib/powpow-add')(opts.path, opts.name);
    break;
  case 'rm':
    require('../lib/powpow-rm')(opts.template);
    break;
  case 'ls':
    require('../lib/powpow-ls')();
    break;
}

