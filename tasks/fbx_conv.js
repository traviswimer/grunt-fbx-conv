/*
 * grunt-fbx-conv
 * https://github.com/traviswimer/grunt-fbx-conv
 *
 * Copyright (c) 2014 Travis Wimer
 * Licensed under the MIT license.
 */

'use strict';


var sh = require('execSync');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('fbx_conv', 'Converts files from fbx to g3db', function() {
    
    var done = this.async();

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      flip: true,
      os: "windows",
      tool_dir: "./node_modules/grunt-fbx-conv/fbx-conv"
    });

    // handle figuring out when the task has completed
    var filesProcessed = 0;
    var filesToProcess = 0;
    var checkFilesFinished = function(){
      filesProcessed++;
      if( filesProcessed >= filesToProcess ){
        done();
      }
    };

    // Iterate over all specified image groups.
    this.files.forEach(function(f) {


      // Create array of existing files
      var validFiles = f.src.filter(function(filepath) {

        // Warn on invalid source files
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('The file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }

      });

      filesToProcess = validFiles.length;

      // Determine the correct file to use for this platform
      var fbxCommand;
      switch( options.os ){
        case "mac":
          fbxCommand = "fbx-conv-mac";
          break;
        case "linux":
          fbxCommand = "fbx-conv-lin64";
          break;
        default:
          fbxCommand = "fbx-conv-win32.exe";
          break;
      }

      var flipFlag = options.flip ? "-f " : "";


      validFiles.forEach(function(fbxFilepath) {

        // Pull out file name from path and remove extension
        var filename = fbxFilepath.replace(/^.*[\\\/]/, '');
        filename = (filename.split("."))[0];

        var thing = sh.run( 'LD_LIBRARY_PATH='+ options.tool_dir +' '+ options.tool_dir + '/' + fbxCommand + ' ' + flipFlag + fbxFilepath );

        // Move the g3db file
        var g3dbFilePath = (fbxFilepath.split("."))[0] + '.g3db';
        sh.run( 'mv ' + g3dbFilePath + ' ' + f.dest );


        // Copy texture files to dest folder
        var g3dbPathNodes = g3dbFilePath.split("/");
        var g3dbGlob = g3dbFilePath.replace( g3dbPathNodes[g3dbPathNodes.length-1], "" ) + '*.png';
        sh.run( 'cp ' + g3dbGlob + ' ' + f.dest );

        checkFilesFinished();

      });


    });
  });

};
