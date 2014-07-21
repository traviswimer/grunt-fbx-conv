/*
 * grunt-fbx-conv
 * https://github.com/traviswimer/grunt-fbx-conv
 *
 * Copyright (c) 2014 Travis Wimer
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: [
        'test/g3db_models/*.g3db',
        'test/g3db_models/*.png'
      ],
    },

    // Configuration to be run (and then tested).
    fbx_conv: {
      myModels: {
        options: {
          os: "linux",
          tool_dir: "./fbx-conv"
        },
        files: [
          {src: ['test/fbx_models/**/*.fbx'], dest: 'test/g3db_models'}
        ]
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

    watch: {
      scripts: {
        files: [
          'test/*_test.js',
          'tasks/**/*.js'
        ],
        tasks: ['test'],
      },
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['jshint', 'clean', 'fbx_conv', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['watch']);

};
