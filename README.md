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

  },
});
```

## Options

### options.flip

* Type: `boolean`
* Default: `true`
* Description: Flips the texture coordinates. Blender exports coordinates in a reverse order, so unless something changes you will probably want to leave this as `true`

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
