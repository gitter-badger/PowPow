module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    /**
     * frameworks to use.
     *
     * We've added mocha and browserify here so that we can use mocha to test
     * and browserify to handle both our source files and test files as
     * browserify modules.
     *
     * available frameworks: https://npmjs.org/browse/keyword/karma-adapter
     */
    frameworks: ['mocha', 'browserify'],

    /**
     * Glob patterns to host in the browser.
     *
     * We want to host our src and test files.
     */
    files: [
      'src/**/*.js',
      'test/**/*.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    /**
     * preprocess matching files before serving them to the browser.
     *
     * In order to test our src and test files we need to tell karma to use
     * browserify on them. This is made available by the karma-bro package.
     *
     * preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
     */
    preprocessors: {
      'src/**/*.js': ['browserify'],
      'test/**/*.js': ['browserify']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    /**
     * Continuous Integration mode
     * if true, Karma captures browsers, runs the tests and exits.
     *
     * Single run is set to true here and false in our Gulpfile.
     *   Using `gulp test` well run the tests every file change.
     *   Using `karma karma.conf.js` will run the tests once and exit.
     */
    singleRun: true
  });
};
