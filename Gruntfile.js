'use strict';
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    accessibility: {
      options: {
        // TODO: For some reason our report assets are not being generated
        reportType: 'json',
        reportLocation: 'reports',
        accessibilityLevel: 'WCAG2AA',
        // NOTE: this options determins what reports we want to display in the cli
        reportLevels: {
          notice: false,
          warning: true,
          error: true
        },


      },
      test: {
        options: {
          // TODO: Will all polaris projects be initialized on this port?
          urls: ['http://localhost:3000'],
          browser: true
        },
        src: ['views/index.hbs']
      }
    }
  });
  // Load the plugin that provides the "a11y" task.
  // grunt accessibility is a grunt task that sniffs a page via phantomjs and creates a report based on wcag 2.0 in the cli
  grunt.loadNpmTasks('grunt-accessibility');

  //register the accessibility task
  grunt.registerTask('a11y', ['accessibility']);
}
