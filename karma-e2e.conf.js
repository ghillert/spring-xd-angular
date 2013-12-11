module.exports = function(config){
    config.set({


    basePath : '.',

    files : [
             'src/test/js/e2e/**/*.js'
    ],

    autoWatch : false,

    browsers : ['Chrome'],

    frameworks: ['ng-scenario'],

    singleRun : true,
    logLevel : LOG_DEBUG,
    proxies : {
    	'/': 'http://localhost:8080/spring-xd-angular/'
    },

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-ng-scenario'
            ],

    junitReporter : {
      outputFile: 'test_out/e2e.xml',
      suite: 'e2e'
    }

})}

