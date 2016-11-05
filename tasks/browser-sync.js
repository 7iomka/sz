var gulp = require('gulp');
var gutil = require('gulp-util');
var config = require('../config');


gulp.task('browser-sync', ['styles', 'scripts'], function() {
		return global.browserSync.init({
        injectChanges: true,
				proxy: config.constants.proxy, // localhost served url
				notify: false,
				reqHeaders: function (config) {
                return {
                    // prevent Host header overriding
                    "host":            config.constants.proxy,
                    "accept-encoding": "identity", // disable any compression
                    "agent":           false
                };
        },

		});
});
