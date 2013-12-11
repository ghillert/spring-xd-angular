module.exports = function(config){
  config.set({
    basePath : '.',

    files : [
      'src/main/webapp/assets/js/jquery/jquery.js',
      'src/main/webapp/assets/js/angular/angular.js',
      'src/main/webapp/assets/js/angular/angular-*.js',
      'src/main/webapp/assets/js/**/**/*.js',
      'src/main/webapp/assets/js/xd/*.js',
      'src/test/js/unit/**/*.js'
    ],

    exclude : [
      'src/main/webapp/assets/js/angular/angular-loader.js',
      'src/main/webapp/assets/js/angular/*.min.js',
      'src/main/webapp/assets/js/angular/angular-scenario.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-script-launcher',
            'karma-jasmine'
            ],
    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  });
};
