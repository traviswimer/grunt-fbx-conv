# grunt-fbx-conv [![Build Status](https://travis-ci.org/traviswimer/grunt-fbx-conv.png?branch=master)](https://travis-ci.org/traviswimer/grunt-fbx-conv)

> Grunt wrapper for the LibGDX [fbx-conv tool](https://github.com/libgdx/fbx-conv) used to convert fbx to g3db.

## Getting Started
This plugin requires [Grunt](http://gruntjs.com/) `~0.4.4` -- [Learn to use Grunt](http://gruntjs.com/getting-started)

Install the plugin with this command:

```shell
npm install grunt-fbx-conv --save-dev
```

Enable in your Gruntfile with:

```js
grunt.loadNpmTasks('grunt-fbx-conv');
```


## The "fbx_conv" task

In your project's Gruntfile, add a section named `fbx_conv` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  fbx_conv: {
    myModels: {
      options: {
        os: "linux",
        flip: true
      },
      files: [
        {src: ['./fbx_models/**/*.fbx'], dest: './g3db_models'}
      ]
    }
  },
});
```

## Options

### options.flip

* Type: `boolean`
* Default: `true`
* Description: Flips the texture coordinates. Blender exports coordinates in a reverse order, so unless something changes you will probably want to leave this as `true`

### options.os

* Type: `String`
* Default: `windows`
* Description: The OS used by your system. Available options are:
  *   windows
  *   mac
  *   linux

### options.tool_dir

* Type: `String`
* Default: `./node_modules/grunt-fbx-conv/fbx-conv`
* Description: The location of the fbx-conv tool directory. The default is the version of the tool included with this grunt plugin.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

> There seems to be active development on the [fbx-conv tool](https://github.com/libgdx/fbx-conv) at the moment. If the version of the tool used in this plugin needs updated, feel free to send a pull request.

> The most recent release of fbx-conv can be found at [http://libgdx.badlogicgames.com/fbx-conv/](http://libgdx.badlogicgames.com/fbx-conv/). The contents of the zip file can be used to replace the fbx-conv directory of this plugin.