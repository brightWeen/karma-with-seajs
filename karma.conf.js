// Karma configuration
// Generated on Sun Dec 27 2015 14:36:34 GMT+0800 (CST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    //karma的适配器框架,即可以在单元测试代码中直接使用的类库或者框架,会挂载到全局window作用域下
    frameworks: ['mocha','chai-sinon','seajs'],


    // list of files / patterns to load in the browser
    files: [
      //待测试的源码
      {pattern: 'src/**/*.js', included: false},
      {pattern: 'bower_components/**/dist/**/*.js', included: false},
      //include表示是否把js通过script标签的方式注入到页面中,如果通过seajs或者requirejs等模块加载器当然不用
      {pattern: 'tests/**/*spec.js', included: false},
      //test脚本的入口
      'tests/test-main.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    //port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
