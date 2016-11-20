/**
 * ISMOBILE
 */
/*

;!function(a){var b=/iPhone/i,c=/iPod/i,d=/iPad/i,e=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,f=/Android/i,g=/(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,h=/(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,i=/Windows Phone/i,j=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,k=/BlackBerry/i,l=/BB10/i,m=/Opera Mini/i,n=/(CriOS|Chrome)(?=.*\bMobile\b)/i,o=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,p=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),q=function(a,b){return a.test(b)},r=function(a){var r=a||navigator.userAgent,s=r.split("[FBAN");if("undefined"!=typeof s[1]&&(r=s[0]),s=r.split("Twitter"),"undefined"!=typeof s[1]&&(r=s[0]),this.apple={phone:q(b,r),ipod:q(c,r),tablet:!q(b,r)&&q(d,r),device:q(b,r)||q(c,r)||q(d,r)},this.amazon={phone:q(g,r),tablet:!q(g,r)&&q(h,r),device:q(g,r)||q(h,r)},this.android={phone:q(g,r)||q(e,r),tablet:!q(g,r)&&!q(e,r)&&(q(h,r)||q(f,r)),device:q(g,r)||q(h,r)||q(e,r)||q(f,r)},this.windows={phone:q(i,r),tablet:q(j,r),device:q(i,r)||q(j,r)},this.other={blackberry:q(k,r),blackberry10:q(l,r),opera:q(m,r),firefox:q(o,r),chrome:q(n,r),device:q(k,r)||q(l,r)||q(m,r)||q(o,r)||q(n,r)},this.seven_inch=q(p,r),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window)return this},s=function(){var a=new r;return a.Class=r,a};"undefined"!=typeof module&&module.exports&&"undefined"==typeof window?module.exports=r:"undefined"!=typeof module&&module.exports&&"undefined"!=typeof window?module.exports=s():"function"==typeof define&&define.amd?define("isMobile",[],a.isMobile=s()):a.isMobile=s()}(this);

*/

//serializeFormJSON
(function ($) {
    $.fn.serializeFormJSON = function () {

        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
})(jQuery);

 /*
  * jQuery throttle / debounce - v1.1 - 3/7/2010
  * http://benalman.com/projects/jquery-throttle-debounce-plugin/
  *
  * Copyright (c) 2010 "Cowboy" Ben Alman
  * Dual licensed under the MIT and GPL licenses.
  * http://benalman.com/about/license/
  */
 (function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);


/**
 * check if a scrollbar is visible?
 * use: $('#my_div1').hasScrollBar(); // returns true if there's a `vertical` scrollbar, false otherwise..
 */
 (function($) {
    $.fn.hasScrollBar = function() {
        return this.get(0).scrollHeight > this.innerHeight();
    }
})(jQuery);



/**
 * BEST WAY TO PRELOAD IMAGES
 * Usage: (in
 * $(window).load(function () {
 * 		preload(images); //images is an array with image metadata
 * }))
 *
 */
// function preload(imageArray, index) {
//         index = index || 0;
//         if (imageArray && imageArray.length > index) {
//             var img = new Image ();
//             img.onload = function() {
//                 preload(imageArray, index + 1);
//             }
//             img.src = images[index]['serving_url'];
// }


// /**
//  * DEFER IMAGES PRELOAD with data-src
//  * @param  {Array}   images
//  * @param  {Function} callback [description]
//  *
//  */
//  function deferImages(images, callback) {
//      var $imgDefer = images;
//
//      for (var i=0; i<$imgDefer.length; i++) {
//        if($imgDefer[i].attr('data-src')) {
//           $imgDefer[i].attr('src',$imgDefer[i].attr('data-src'));
//           $imgDefer[i].onload(function (e) {
//             callback(e);
//           });
//        }
//      }
//  }
/**
 * DEFER IMAGES PRELOAD from array
 * @param  {Array}   images
 * @param  {Function} callback [description]
 *
 */
 function deferImagesFromArr(images, callback) {
     images = images || [];
     callback = callback || function () {};

     for (var i=0; i<images.length; i++) {
       var img = new Image();
       img.src = images[i];
       if(callback) {
         img.onload = function(e) {
           callback(e);
         }
       }
     }
 }

/**
 * Defer one image with callback
 * @param  {String}   src
 * @param  {Function} callback
 */
function deferImage(src, callback) {
  var img = new Image();
  img.src = src;
  if(callback) {
    img.onload = function(e) {
      callback(e, img);
    }
  }
}
