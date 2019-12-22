'use strict';

var _gulp = _interopRequireDefault(require("gulp"));

var path = _interopRequireWildcard(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _cxdHbsHelpers = _interopRequireDefault(require("cxd-hbs-helpers"));

var pkg = _interopRequireWildcard(require("../../package.json"));

var coretasks = _interopRequireWildcard(require("cxd-core-gulp-tasks"));

var fkKitchen = _interopRequireWildcard(require("cxd-kitchen-assemble"));

require("./setup-require-plugins-all");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('@babel/register')({
  presets: ['@babel/preset-env']
});

require('@babel/core').transform('code', {
  plugins: ['dynamic-import-node']
}); // PAGE DEPENDENCIES


var runSequence = require('run-sequence').use(_gulp.default); // APP DEPENDENCIES


// let dirApproot,
//   dirSrc, 
//   fkConfig, 
//   info, 
//   APP_NAME, 
//   APP_VERSION, 
//   version, 
//   path, 
//   p, 
//   mappings, 
//   nots, 
//   globs, 
//   g, 
//   scss, 
//   javascript, 
//   j, 
//   serve, 
//   watchit, 
//   sassdocOptions, 
//   beautifier, 
//   codeHeaders
var dirApproot = path.resolve(__dirname, '../../');
var dirSrc = path.resolve(__dirname, '../../src');

var fkConfig = function fkConfig() {};

fkConfig = function fkConfig() {
  // ====== CONFIGURATION VARIABLES & FUNCTIONS ======>
  var info = function info() {
    var APP_NAME = 'Framekit Development Center';
    var APP_VERSION = '1.0.0';
    return "".concat(APP_NAME, ", v").concat(APP_VERSION);
  };

  info(); // ====== CONFIGURATION OBJECTS ======> 

  (function () {
    version = function version() {
      return APP_NAME.concat(' ' + APP_VERSION);
    }; // ====== PATHS ======>


    var paths = {
      dirApproot: dirApproot,
      dirBuild: "".concat(dirApproot, "/build"),
      dirBuildAssets: "".concat(dirApproot, "/build/assets"),
      dirBuildCSS: "".concat(dirApproot, "/build/assets/css"),
      dirBuildJS: "".concat(dirApproot, "/build/assets/js"),
      dirDist: "".concat(dirApproot, "/dist"),
      dirDistCSS: "".concat(dirApproot, "/dist/css"),
      dirDistSCSS: "".concat(dirApproot, "/dist/scss"),
      dirDistJS: "".concat(dirApproot, "/dist/js"),
      dirGloabal: "".concat(dirSrc, "/global"),
      dirJSsrc: "".concat(dirSrc, "/javascript"),
      dirKitchen: "".concat(dirApproot, "/kitchen"),
      dirKitchenAssets: "".concat(dirApproot, "/kitchen/assets"),
      dirKitchenSCSS: "".concat(dirApproot, "/kitchen/assets/scss"),
      dirKitchenCSS: "".concat(dirApproot, "/kitchen/assets/css"),
      dirKitchenIMG: "".concat(dirApproot, "/kitchen/assets/img"),
      dirKitchenJS: "".concat(dirApproot, "/kitchen/assets/js"),
      dirKitchenViews: "".concat(dirApproot, "/kitchen/pages"),
      dirKitchenData: "".concat(dirApproot, "/kitchen/data"),
      dirKitchenTemplates: "".concat(dirApproot, "/kitchen/templates"),
      dirKitchenCollections: "".concat(dirApproot, "/kitchen/collections"),
      dirNodemods: "".concat(dirApproot, "/node_modules"),
      dirReports: "".concat(dirApproot, "/_reports"),
      dirSrc: dirSrc,
      dirSrcSCSS: dirSrc,
      dirSrcJS: "".concat(dirSrc, "/javascript"),
      dirStories: "".concat(dirApproot, "/stories"),
      dirStorybook: "".concat(dirApproot, "/storybook"),
      dirTasks: "".concat(dirApproot, "/tasks"),
      dirTemp: "".concat(dirApproot, "/.temp"),
      dirTempCSS: "".concat(dirApproot, "/.temp/css"),
      dirTest: "".concat(dirApproot, "/test"),
      dirUtilities: "".concat(dirSrc, "/utilities")
    };
    var p = paths;
    var mappings = {
      setup: {
        reqPlugsPath: "".concat(p.dirTasks, "/setup/require-plugins-all.js"),
        functionsPath: "".concat(p.dirTasks, "/functions"),
        configPath: "".concat(p.dirTasks, "/setup/configuration"),
        pkgPath: "".concat(p.dirApproot, "/package.json")
      },
      helpers: {
        srcGlob: globs.helpersMap,
        destGlob: "".concat(p.dirGlobal, "/_helpers.scss"),
        destDir: p.dirGlobal,
        name: 'generate:mapping:helpers'
      },
      tools: {
        srcGlob: globs.toolsMapping,
        destGlob: "".concat(p.dirGlobal, "/_tools.scss"),
        destDir: p.dirGlobal,
        name: 'generate:mapping:tools'
      },
      utilities: {
        srcGlob: globs.utilitiesMap,
        destGlob: "".concat(p.dirUtilities, "/_utilities.scss"),
        destDir: p.dirBuildAssets,
        name: 'generate:mapping:utilities'
      },
      kitchenSCSS: {
        kitchenMainSCSS: "".concat(p.dirApproot, "/kitchen.scss"),
        // _kitchen-extras, _docs, _layout is imported in this file
        kitchenSCSSExtras: "".concat(p.dirApproot, "/_kitchen-extras.scss"),
        destDir: p.dirBuildCSS,
        name: 'fk:KitchenCSS'
      }
    };
    var nots = {
      tools: '!**/_tools.scss',
      helpers: ['!**/_helpers.scss', "!".concat(p.dirGlobal, "/_helpers.scss")],
      utilities: ['!**/_utilities.scss', "!".concat(p.dirUtilities, "/_utilities.scss")],
      allSCSSNots: ['!**/_tools.scss', '!**/_helpers.scss', '!**/_utilities.scss'],
      buildJS: "!".concat(p.dirBuild, "/**/*.js"),
      buildCSS: "!".concat(p.dirBuild, "/**/*.css")
    };
    var globs = {
      dirKitchenAssetAll: ["".concat(p.dirKitchenAssets, "/**/*")],
      // cleanDirs can take multiple globs, can be direct path to delete a folder
      dirBuildAssetsNotJsOrCSS: ["".concat(p.dirBuildAssets, "/**/*"), nots.buildJS, nots.buildCSS],
      distCSS: ["".concat(p.dirDistCSS, "/**/*.css")],
      tempCSS: ["".concat(p.dirTempCSS, "/**/*.css")],
      buildCSS: ["".concat(p.dirBuildAssets, "/css/**/*.{css,map}")],
      tools: [nots.tools],
      helpers: ["!".concat(p.dirGlobal, "/**/_helpers.*.scss"), nots.helpers],
      utilities: ["".concat(p.dirUtilities, "/_utilities.*.scss"), nots.utilities],
      cleanDirDistJS: ["".concat(p.dirDistJS, "/**/*.{js, jsx, ts, tsx}"), "".concat(p.dirTemp, "/**/*.{js, jsx, ts, tsx}")],
      cleanDirBuildJS: ["".concat(p.dirBuildJS, "/**/*.{js, jsx, ts, tsx}")],
      scssNotMap: ['!**/_tools.scss', '!**/_helpers.scss', '!**/_utilities.scss']
    };
    var g = globs; // SCSS BUILD FILES
    // These are automatically available for use
    // To ass new, just add a new sass node

    var scss = {
      buildkitchen: {
        srcSCSS: globs.kitchenSCSSMap,
        srcCSS: globs.kitchenCSSMap,
        dest: p.dirBuildAssets,
        name: 'build:kitchenCSS',
        optimize: false,
        sassOptions: {
          includePaths: p.dirNodemods,
          sourceComments: true //,
          //outputStyle: 'nested'

        }
      },
      prod: {
        src: p.dirSrcSCSS,
        dest: p.dirDistCSS,
        name: 'build:sass:prod',
        // optimize: true,
        sassOptions: {
          includePaths: p.dirNodemods,
          // outputStyle: 'compressed', // compressed
          sourceComments: false
        }
      },
      postcss: {
        name: 'fkcss:map:rename',
        src: p.dirDistCSS,
        dest: p.dirDistCSS,
        cssOptions: {
          outputStyle: 'compressed'
        },
        uglifyCSSOps: ['framekit.css', 'framekit.min.css'],
        uglyComments: false,
        debug: true,
        renameOps: {
          suffix: '.min'
        },
        banner: codeHeaders.css,
        renameOptions: {
          suffix: '.min'
        }
      },
      releaseCSS: {
        name: 'fkCSS',
        src: "".concat(p.dirSrcSCSS, "/framekit.scss"),
        dest: p.dirDistCSS,
        sassOptions: {
          includePaths: p.dirNodemods,
          outputStyle: 'compact',
          precision: 10,
          sourceComments: false
        },
        autoprefixOps: {
          browsers: ['> 1%'],
          remove: false
        },
        stripComments: {
          preserve: true
        },
        uglifyCSSOps: ['framekit.css', 'framekit.min.css'],
        uglyComments: false,
        debug: true
      }
    };
    var javascript = {
      cleanJSMap: ["".concat(p.dirDistJS, "/**/*.{js, jsx, ts, tsx}"), "".concat(p.dirBuild, "/js/**/*.{js, jsx, ts, tsx}"), "".concat(p.dirTemp, "/**/*")],
      fileName: 'framekit.js',
      jsTempFiles: ["".concat(p.dirTemp, "/ucon-inject.js"), "".concat(p.dirTemp, "/accordion.js"), "".concat(p.dirTemp, "/tabs.js"), "".concat(p.dirTemp, "/scroll-smooth.js"), "".concat(p.dirTemp, "/panels.js"), "".concat(p.dirTemp, "/navigate.js"), "".concat(p.dirTemp, "/polyfills/svg-use-symdef.js"), "".concat(p.dirTemp, "/polyfills/svg-pollyfill-4E.js")],
      jsSrcFiles: ["".concat(p.dirSrcJS, "/components/ucon-inject.js"), "".concat(p.dirSrcJS, "/components/accordion.js"), "".concat(p.dirSrcJS, "/components/tabs.js"), "".concat(p.dirSrcJS, "/components/scroll-smooth.js"), "".concat(p.dirSrcJS, "/components/panels.js"), "".concat(p.dirSrcJS, "/components/navigate.js"), "".concat(p.dirSrcJS, "/assets/pollyfills/svg-use-symdef.js"), "".concat(p.dirSrcJS, "/assets/pollyfills/svg-pollyfill-4E.js")],
      babelPresets: ['@babel/preset-env', '@babel/preset-react'],
      babelPlugins: ['@babel/plugin-transform-arrow-functions', '@babel/plugin-transform-modules-commonjs', '@babel/node'],
      dist: p.dirDistJS,
      kitchen: p.dirKitchenJS,
      banner: codeHeaders.js
    };
    var j = javascript;
    var serve = {
      plugins: {
        browserSync: {
          open: true,
          notify: false,
          browser: 'google chrome',
          logPrefix: 'FRAMEKIT',
          files: "".concat(p.dirBuild, "/**/*"),
          server: {
            baseDir: "".concat(p.dirBuild),
            index: 'index.html'
          }
        }
      }
    };
    var watchit = {
      watchers: [{
        match: ["".concat(p.dirSrcSCSS, "/**/*.scss"), allSCSSNots],
        tasks: ['buildCSS'] // build for dist and kitchen

      }, {
        match: ["".concat(p.dirKitchenSCSS, "/**/*.scss}"), allSCSSNots],
        tasks: ['buildKitchenCSS'] // only build for kitchen

      }, {
        match: ["".concat(p.dirKitchen, "/data/**/*"), "".concat(p.dirKitchen, "/**/*.{html,md,hbs}"), allSCSSNots],
        tasks: ['buildKitchenViews']
      }]
    };
    var sassdocOptions = {
      build: "".concat(p.dirReports, "/sassDocs"),
      verbose: true,
      display: {
        access: ['public', 'private'],
        alias: true,
        watermark: false
      },
      groups: {
        components: 'Components',
        'undefined': 'Utilities'
      }
    };
    var beautifier = {
      indent_char: ' ',
      indent_size: 2,
      indent_with_tabs: false,
      max_preserve_newlines: 1,
      wrap_line_length: 0,
      unformatted: "{{ }} a abbr acronym address b bdo big cite code col del dfn dt em font\n        h1 h2 h3 h4 h5 h6 i img ins kbd mark pre q s samp small span\n        strike strong sub sup tt u var".split(' ')
    };
    var codeHeaders = {
      js: ['/*!', '* @title           <%= pkglobs.name %> - Javascript', '* @summary         Part of the Fannie Mae - Bluprint Design System. All system and component javascript lives here.', '* @description     Interactive javascript for Framekit', '*', '* @file            framekit.js ', '* @version         <%= pkglobs.version %>', '* @link            <%= pkglobs.homepage %>', '*', '* @author          Heath Shults', '* @since           Version 0.0.0', '*', '* @copyright       Copyright (c) 2018 Fannie Mae, Inc.', '* @license         <%= pkglobs.license %>', '*/', ''].join('\n'),
      css: ['/*!', '* @title           <%= pkglobs.name %> - Cascading Style Sheets', '* @summary         Part of the Fannie Mae - Bluprint Design System. All system and component styles lives here.', '* @description     Styles for Framekit', '*', '* @file            framekit.css', '* @version         <%= pkglobs.version %>', '* @link            <%= pkglobs.homepage %>', '*', '* @author          The Fannie Mae CXD Team', '* @since           Version 0.0.0', '*', '* @copyright       Copyright (c) 2019 Fannie Mae, Inc.', '* @license         <%= pkglobs.license %>', '*/', ''].join('\n')
    };
    return module.exports = {
      version: version,
      path: path,
      p: p,
      mappings: mappings,
      nots: nots,
      globs: globs,
      g: g,
      scss: scss,
      javascript: javascript,
      j: j,
      serve: serve,
      watchit: watchit,
      sassdocOptions: sassdocOptions,
      beautifier: beautifier,
      codeHeaders: codeHeaders
    };
  });
};

module.exports = fkConfig;
/**   
  // module.exports = {
  //   buildAssetsMap : defaults.globs.buildAssetsMap,
  //   cleanJSMap : defaults.javascript.cleanJSMap,
  //   codeHeaders : defaults.codeHeaders, // header info for css and js production files
  //   globs : defaults.globs, // **s
  //   mappings : defaults.mappings, // helpers, tools, utilities map
  //   scss : defaults.scss, // css compile configs
  //   sassdocOptions : defaults.sassdocOptions, // generate docs detailing Framekit SCSS
  //   javascript : defaults.javascript, // js transpile configs
  //   jsProduction : defaults.javascript, // js production ready config
  //   cssProduction : defaults.scss.postcss, // css production ready config
  //   cssRelease : defaults.scss.release, // css release script config
  //   watchit : defaults.watchit, // watch for files that change config
  //   serve : defaults.serve, // launch the local site config
  //   beautifier : defaults.beautifier }
**/
// ====== REGISTER MAPPING IMPORTS =======================>

/** Automatically sets up injects mapping via config
  * To add a new, add new config obj to config in mapping section 
  * Slowly to be removed to static imports as framework matures
**/
// var allmaptasks = []
// Object.keys(defaults.mappings).forEach(function (key) {
//   tasks.inject(gulp, defaults.mappings[key])
//   allmaptasks.push(defaults.mappings[key].name)
//   console.log(defaults.mappings[key].name)
// })

/** ====== REGISTER STYLE BUILD TASKS ===================>
  * Automatically sets up sass builds via the config file
  * To add a new, add new config obj to config in sass section
**/
//   Object.keys(defaults.scss).forEach(function (key) {
//     tasks.sass(gulp, defaults.scss[key]);
//     console.log(defaults.scss[key])
//   });
//   return defaults
// });
// module.exports = { 
//   dirApproot,
//   dirSrc,
//   dirBuild: p.dirBuild,
//   dirBuildAssets: p.dirBuildAssets,
//   dirBuildJS: p.dirBuildJS,       
//   dirDist: p.dirDist,
//   dirDistCSS: p.dirDistCSS,
//   dirDistSCSS: p.dirDistSCSS,
//   dirDistJS: p.dirDistJS,
//   dirKitchen: p.dirKitchen,
//   dirKitchenCSS: p.dirKitchenCSS,
//   dirKitchenIMG: p.dirKitchenIMG ,
//   dirKitchenJS: p.dirKitchenJS,
//   dirNodemods: p.dirNodemods,
//   dirReports: p.dirReports,
//   dirSrcSCSS: p.dirSrcSCSS,
//   dirSrcJS: p.dirSrcJS,
//   dirStories: p.dirStories,
//   dirStorybook: p.dirStorybook,
//   dirTasks: p.dirTasks,
//   dirTemp: p.dirTemp,
//   dirTest: p.dirTest,
//   dirUtilities: p.dirUtilities
// },
