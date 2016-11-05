/********* Get site url (local) *********/
var siteURL = 'http://seosintez.cc:8081';


/********* Get invironment **********/
var gutil = require('gulp-util');
var env = gutil.env.env || 'development';
// var env = gutil.env.env || 'production';
console.log(env);
var _ = require('lodash');

/**
 *   (1) --->  source and destination paths for build
 */
 var devSrc        = 'development/',
     devDest       = 'development-compiled', // for compile uncompressed assets for testing
     prodDest      = 'production'; // for compile compressed and minified version of project

 var outputDest    = ( (env === 'development') ? devDest : prodDest ) + '/';


 var paths = {
            /** development sources **/
      src: {
          assets: devSrc + 'assets/**/*',
          images: devSrc + 'assets/img/**/*',
          js: devSrc + 'js/**/*',
          jsdir: devSrc + 'js/',
          json: devSrc + 'js/json/**/*.json',
          jsLibDir: devSrc + 'js/libs/',
          lib: devSrc + 'lib/**/*',
          inc: devSrc + 'inc/**/*',
          sass: devSrc + 'scss/main.scss',
          allScss: devSrc + 'scss/**/*.scss',
          coreFiles: devSrc + '*.*'
      },
           /** destination folders **/
      dest: {
        assets: outputDest, // we not create assets in dest structure
       	allImages: outputDest,
       	js: outputDest + 'js/',
       	json: outputDest + 'js/json/',
       	lib: outputDest + 'lib/',
       	inc: outputDest + 'inc/',
       	css: outputDest + 'css/',
       	coreFiles: outputDest,
        allFiles: outputDest
      }
};

var jsFiles = [
  // paths.src.jsLibDir + 'modernizr.min.js',
  paths.src.jsLibDir + 'jquery-1.12.4.min.js',
  // paths.src.jsLibDir + 'jquery-ui.min.js',
  // paths.src.jsLibDir + 'jquery.ui.datepicker-ru.js',
  paths.src.jsLibDir + 'transition-events.js',
  paths.src.jsLibDir + 'TweenMax.min.js',
  paths.src.jsLibDir + 'ScrollMagic.min.js',
  // paths.src.jsLibDir + 'debug.addIndicators.min.js',
  paths.src.jsLibDir + 'jquery.ScrollMagic.min.js',
  paths.src.jsLibDir + 'animation.gsap.min.js',
  // paths.src.jsLibDir + 'MorphSVGPlugin.min.js',
  // paths.src.jsLibDir + 'DrawSVGPlugin.min.js',
  // paths.src.jsLibDir + 'CSSRulePlugin.min.js',
  paths.src.jsLibDir + 'ScrollToPlugin.min.js',
  // paths.src.jsLibDir + 'jquery.mixitup.min.js',
  // paths.src.jsLibDir + 'jquery.mixitup-pagination.js',
  // paths.src.jsLibDir + 'jquery.custom.mixitup.js',
  // paths.src.jsLibDir + 'jquery.vide.min.js',
  paths.src.jsLibDir + 'jquery.validate.all.min.js',
  paths.src.jsLibDir + 'remodal.min.js',
  // paths.src.jsLibDir + 'lightgallery-all.min.js',
  // paths.src.jsLibDir + 'jquery.mousewheel.min.js',
  // paths.src.jsLibDir + 'lazyYT.js',
  // paths.src.jsLibDir + 'jquery.qtip.min.js',
  // paths.src.jsLibDir + 'owl.carousel.min.js',
  // paths.src.jsLibDir + 'slick.js',
  // paths.src.jsLibDir + 'swiper.min.js',
  // paths.src.jsLibDir + 'dropzone.min.js',
  paths.src.jsLibDir + 'waves.js',
  // paths.src.jsLibDir + 'jquery.sweet-modal.js',
  paths.src.jsLibDir + '_helpers.js',
     paths.src.jsdir + 'main.js',
  ];

var jsFilesSeparated = [
    paths.src.jsLibDir + 'modernizr.min.js'
];



/**
 *  (2) -----------> Api & project constants
 */

 var constants = {
        default: {
            proxy: siteURL,
            dest: devDest
        },
        development: {
            dest: devDest
        },
        production: {
            dest: prodDest
        }
  };


/**
 *   (3) -----------> an Object for Toggling Plugins
 */

 var run = {
    default: {
        js:  {
            uglify: false,
            wrap: false, //is comments contains name of the file in concatenated final file
            gzip: false
        },
        json: {
            minify: true
        },

        styles: {
            maps: true,
            minify: false,
            gzip: false
        },
        img: {
            optimize: false
        },
        build: {
            clean: false
        }
    },
    development: {
        js:  {
            uglify: false,
            wrap: true, //is comments contains name of the file in concatenated final file
            gzip: false,
        },
        json: {
            minify: true
        },
        styles: {
            maps: true,
            minify: false,
            gzip: false

        },
        img: {
            optimize: false
        }
    },
    production: {
        js:  {
            uglify: false,//temporar
            wrap: true, //is comments contains name of the file in concatenated final file
            gzip: false //temporar
        },
        json: {
            minify: true
        },
        styles: {
            maps: false,
            minify: true,
            gzip: true
        },
        img: {
            optimize: true
        },
        build: {
            clean: true
        }
    }
};


/**
 *   (4) an object containing all the options for each gulp plugin
 */
 var plugin = {
    default:  {
        js:  {
            jsFiles: jsFiles,
            jsFilesSeparated: jsFilesSeparated,
            wrap: '//<%= file.relative %>\n<%= contents %>'
        },

        styles: {
            sass: {
              style: 'compressed'
            },
            autoprefixer: {
              browsers: ['last 100 versions'],
            }
        },

        img: {

        }
    },
    development: {
        js:  {
          jsFiles: jsFiles,
          jsFilesSeparated: jsFilesSeparated
        },

        styles: {
            sass: {
              style: 'expanded'
            }
        },

        img: {

        }
    },
    production: {
        js:  {
           jsFiles: jsFiles,
           jsFilesSeparated: jsFilesSeparated
        },

        styles: {
            sass: {
              style: 'compressed'
            },
            autoprefixer: {
              cascade: false
            }
        },

        img: {
            optimize: {
    					pngquant: true,
    	        optipng: true,
    	        zopflipng: false,
    	        advpng: false,
    	        jpegRecompress: false,
    	        jpegoptim: true,
    	        mozjpeg: false,
    	        gifsicle: false,
    	        svgo: false
    		    }
        }
    }
 };


 var runOpts = _.merge( {}, run.default, run[ env ] );
 var pluginOpts = _.merge( {}, plugin.default, plugin[ env ] );
 var constantsOpts = _.merge( {}, constants.default, constants[ env ]);

module.exports.paths = paths;
module.exports.constants = constantsOpts;
module.exports.run = runOpts;
module.exports.plugin = pluginOpts;
