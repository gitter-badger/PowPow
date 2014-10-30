/**
 * My Module JS is awesome.
 * @todo
 *   - update this files description above
 *   - change the author to yourself
 *   - remove line 26 and delete `lib/my-hello-world`
 * @file
 * @author me
 */

/**
 * Note:
 *   As part of the browserify magic this JS file will be wrapped in a closure
 *   so you don't have to put your code in a closure.
 */

// -- Libraries ---------------------------------------------------------------

// Import the global jQuery library to $. This works because of a browserify
// transform equating this to `var $ = (window.jQuery)`
var $ = require('jquery');

// Import NPM modules by name. `require` defaults to looking in the
// `node_modules` folder.
var _ = require('lodash');

// Import your own modules by specifying the path.
var helloWorld = require('./lib/hello-world');

// -- Constants ---------------------------------------------------------------

/**
 * Used for `log()`. And to retrieve the data from Drupal.settings.
 */
var MODULE_NAME = 'my_module';

/**
 * Enables/disables `log()` output.
 */
var DEBUG = true;

// -- Logging -----------------------------------------------------------------

/**
 * This works just like console.log with a few extra features:
 *   - It only logs to the console if DEBUG is true
 *   - It prepends the constant MODULE_NAME to the log arguments.
 *
 * Example:
 *   log('is this working?'); // 'my_module: is this working?'
 */
function log(/* arguments */) {
  if (!DEBUG) { return; }
  var args = Array.prototype.slice.call(arguments);
  args.unshift(MODULE_NAME + ': ');
  console.log.apply(args);
}

// -- Variables ---------------------------------------------------------------

// Retrieve the data provided by `my_module_get_js_data()`
var data = Drupal.settings[MODULE_NAME];

// -- Let the Magic Happen ----------------------------------------------------

//TODO: your thing.
