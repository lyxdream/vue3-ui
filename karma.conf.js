const webpackConfig = require('@vue/cli-service/webpack.config')

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [ 'src/**/*.js', 'test/**/*.spec.js' ],
    exclude: [ '**/*.swp' ],
    preprocessors: {
      '**/*.spec.js': ['webpack', 'sourcemap']
    },
    // frameworks: ['mocha','webpack'],
    // plugins: [
    //   'karma-webpack',
    //   'karma-mocha',
    // ],
    // files: [
    //   // all files ending in ".test.js"
    //   // !!! use watched: false as we use webpacks watch
    //   { pattern: 'tests/**/*.spec.js' }
    // ],
    // preprocessors: {
    //   '**/*.spec.js': ['webpack', 'sourcemap']
    // },
    autoWatch: true,
    webpack: webpackConfig,
    reporters: ['spec'],
    browsers: ['ChromeHeadless']
  })
}