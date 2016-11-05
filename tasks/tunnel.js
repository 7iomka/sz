var gulp = require('gulp'),
    gutil = require('gulp-util'),
    ngrok	= require('ngrok'),
    config = require('../config'),
    localtunnel = require('localtunnel');


gulp.task('tunnel', function () {
    // lt --port 3000
  // ngrok.connect({
  //   proto: 'http', // http|tcp|tls
  //   addr: 3000,
  // },function (err, url) {
  //   console.log(url); // get url of proxyServer (external temporary url to local site)
  // });
});
