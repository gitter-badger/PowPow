// -- Libraries ---------------------------------------------------------------

var gulp       = require('gulp');
var browserify = require('gulp-browserify');
var jshint     = require('gulp-jshint');
var uglify     = require('gulp-uglify');
var rename     = require('gulp-rename');
var karma      = require('karma').server;

// -- Constants ---------------------------------------------------------------

// TODO: Change me!
var JS_FILE_NAME          = 'my_module.js';

var SRC_DIR               = './src';
var BUILD_DIR             = './build';
var BROWSERIFY_ENTRYPOINT = SRC_DIR  + '/' + JS_FILE_NAME;
var SRC_JS_FILES          = SRC_DIR + '/**/*.js';
var BUILT_JS_FILE         = BUILD_DIR + '/' + JS_FILE_NAME;

// -- Tasks -------------------------------------------------------------------

/**
 * `gulp build`
 * ============
 * Runs the list of defined tasks.
 */
gulp.task('build', [
  'jshint',
  'browserify',
  'minify'
]);

/**
 * `gulp watch`
 * ============
 * Runs `gulp build` then runs `gulp build` when files defined by the
 * SRC_JS_FILES constant change.
 */
gulp.task('watch', ['build'], function() {
  gulp.watch(SRC_JS_FILES, ['build']);
});

gulp.task('test', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    autoWatch: true,
    singleRun: false
  }, done);
});


/**
 * `gulp browserify`
 * =================
 * Browserify uses the "browserify" information in the package.json for some
 * configuration.
 *
 * This task is pointed at the file defined by the BROWSERIFY_ENTRYPOINT
 * constant. And builds to the folder defined by the BUILD_DIR constant.
 *
 * Example:
 * If JS_FILE_NAME is `my_module.js` then this task will create
 * `build/my_module.js`.
 *
 */
gulp.task('browserify', function() {
  return gulp.src(BROWSERIFY_ENTRYPOINT)
    .pipe(browserify({
      insertGlobals : true,
      debug : !gulp.env.production
    }))
    .pipe(gulp.dest(BUILD_DIR));
});

/**
 * `gulp minify`
 * =============
 * Minify creates a minified version of the file built by `gulp browserify`
 * and places it next to that file with a `.min.js` extension.
 */
gulp.task('minify', function() {
  gulp.src(BUILT_JS_FILE)
    // Pipe through uglify.
    .pipe(uglify())
    // Through a .min on the file.
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest(BUILD_DIR));
});

/**
 * `gulp jshint`
 * =============
 * JSHint will pull in options from the .jshintrc if there is one in this js
 * folder.
 *
 * JSHint documentation: http://jshint.com/docs/
 */
gulp.task('jshint', function() {
  gulp.src(SRC_JS_FILES)
    .pipe(jshint());
});
