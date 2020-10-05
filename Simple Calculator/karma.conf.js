module.exports = function(config) {
    config.set({
        frameworks: ['jasmine', 'jasmine-matchers'],
        preprocessors: {
            '*.js': ['coverage']
        },
        files: [
            './custom-matchers.js',
            '*.js',
            '*.spec.js'
        ],
        plugins: [
            'karma-jasmine', 
            'karma-jasmine-matchers', 
            'karma-chrome-launcher',
            'karma-coverage'
        ],
        //reporters: ['progress'],
        reporters: ['dots', 'coverage'],
        color: true,
        //singleRun: true
        browsers: ['ChromeHeadless'],
        singleRun: true,
        coverageReporter: {
            dir: 'coverage/',
            reporters: [
                { type: 'html', sub: 'html' }
            ]
        }
    });
};
