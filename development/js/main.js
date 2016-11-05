// jQuery(document).ready(function($) {
//     var $window = $(window),
//         $body = $('body');
//
//     /**
//        * Header video background
//        */
//
//     $('header').vide({
//         mp4: 'video/video',
//         webm: 'video/video',
//         ogv: 'video/video',
//         poster: 'video/video'
//     }, {
//         posterType: 'jpg',
//         autoplay: false
//     });
//     // Get instance of the plugin
//     var headerVideoInstance = $('header').data('vide');
//
//     // Get video element of the background. Do what you want.
//     window.headerVideo = headerVideoInstance.getVideoObject();
//
//     function deferImages() {
//         // bind event listener to transEndEventName eg: this.addEventListener(transEndEventName, callbackFunction, false);
//         var $imgDefer = $('section').not('.our-works').add('.remodal--gallery-assortiment, footer').find('img').each(function() {
//             var daraSrc = $(this).data('src');
//             $(this).attr('src', daraSrc);
//             $(this).addClass('fullLoaded');
//
//         });
//     }
//     deferImages();
//
//     //init TimelineMax
//     var tl = new TimelineMax();
//     // Init Controller of ScrollMagic
//     var scrollMagicController = new ScrollMagic.Controller({
//         // addIndicators: true
//     });
//     scrollMagicController.enabled(false);
//     window.scrollMagicController = scrollMagicController;
//
//     /**
//    * Wawes material effect initialization to all buttons
//    */
//     Waves.attach('.btn');
//     Waves.init();
//
//     /**
//      * HEADER MENU SMALL && LARGER settings
//      */
//
//     /** SCROLL TO from links of Header_MENU **/
//
//     $('.header-menu_button a').add($('.header-menu_item a').not('.header-menu_item--remodal-link')).on('click', function(e) {
//         if ($(this).attr('href').charAt(0) !== '#') {
//             return;
//         }
//         e.preventDefault();
//         var $self = $(this);
//         if ($self.closest('.short-navigation')) {
//             $('.header-navigation--static__close').click().afterTransition(function() {
//                 goToTarget('short-navigation');
//             });
//         } else {
//             goToTarget('large-navigation');
//         }
//
//         function goToTarget(menu) {
//             var target = $self.attr('href');
//
//             var offset;
//             if (menu === 'large-navigation') {
//                 offset = $(".large-navigation-container").innerHeight();
//             } else {
//                 offset = $(".short-navigation-wrapper").innerHeight();
//             }
//             offset = offset || 60;
//
//             if (isMobile.apple.device || is_android_default_bro) {
//                 $('html, body').animate({
//                     scrollTop: $(target).offset().top - offset
//                 }, 400);
//                 return;
//
//             }
//             TweenMax.to(window, 1.5, {
//                 scrollTo: {
//                     y: target,
//                     offsetY: offset
//                 },
//                 ease: Expo.easeInOut
//             })
//         }
//
//     });
//
//     /** END SCROLL TO from links of Header_MENU **/
//
//     /** STICKY MENU SETTINGS ***/
//     var $navContainer = $(".large-navigation-container"),
//         $navContainerWrapper = $(".large-navigation-wrapper-outer"),
//
//         navContainerClassFixed = "large-navigation-container--sticky",
//         navContainerWrapperClassFixed = "large-navigation-wrapper-outer--fixed";
//     // $headerOffset = $('.site-header').innerHeight() - $navContainer.innerHeight();
//
//     function calcOffsetAndMakeAction() {
//         $headerOffset = $navContainer.offset().top;
//         if ($(this).scrollTop() > $headerOffset) {
//             $navContainerWrapper.addClass(navContainerWrapperClassFixed);
//             $navContainer.addClass(navContainerClassFixed);
//
//         } else {
//             $navContainer.removeClass(navContainerClassFixed);
//             $navContainerWrapper.removeClass(navContainerWrapperClassFixed);
//         }
//     }
//     $(window).on('scroll orientationchange', calcOffsetAndMakeAction).trigger('scroll');
//     $(window).on('resize', $.throttle(250, calcOffsetAndMakeAction));
//
//     /**
//      * Hamburger expandation for short-navigation
//      */
//
//     var hamburger = $(".hamburger, .text-menu");
//     if (hamburger.length > 0) {
//
//         $(hamburger).on("click", function(e) {
//             e.preventDefault();
//             e.stopPropagation();
//             $('.short-navigation').addClass('header-navigation--expanded');
//             // $('html').addClass('remodal-is-locked');
//
//         });
//
//         $('.header-navigation--static__close').on('click', function(e) {
//             e.preventDefault();
//             e.stopPropagation();
//             // $('html').removeClass('remodal-is-locked');
//             $('.short-navigation').removeClass('header-navigation--expanded');
//
//             // $(hamburger).click();
//         })
//
//     }
//
//     /**
//  * Add .spacer after content of the span (break)
//  */
//     $('[class*=with-spacer]').filter(function() {
//         return $(this).has('span');
//     }).append('<span class="spacer">&nbsp;</span>');
//
//
//     /**
//    * **************** SCROLL MAGIC && GSAP ANIMATIONS **********************
// */
//
//     var $headerElement = $('header'),
//         // hide elements
//         $headerHiddenElements = $headerElement.find('.logo.logo--large, .logo-separator, .header-adress, .header-contacts .phone, .header-contacts .small-text, .title-container > span, .header-big-title, .site-subtitle span, .large-navigation-wrapper, .header-label .cls-1, .header-label .cls-2, .header-label .cls-3, .header-label .cls-4, .header-label .header-label__left-scope-1, .header-label .header-label__left-scope-2, .header-label .header-label__right-scope-1, .header-label .header-label__right-scope-2');
//
//     /**
//      * START if is NOT mobile device
//      */
//     if (!isMobile.any && !is_android_default_bro) {
//
//         /** Animation for HEADER **/
//
//         // Elements to animation
//         // $hBigTitle = $headerElement.find('.header-big-title'),
//         var $logoElement = $headerElement.find('.logo.logo--large'),
//             $logoIcon = $logoElement.find('.logo__icon'),
//             $logoTitle = $logoElement.find('.logo__title'),
//             $logoSeparator = $headerElement.find('.logo-separator'),
//             $hAdress = $headerElement.find('.header-adress'),
//             $hPhone = $headerElement.find('.header-contacts .phone'),
//             $hTopAnother = $headerElement.find('.header-contacts .small-text'),
//             $hTitleSpans = $headerElement.find('.title-container > span'),
//             $hSubTitle = $headerElement.find('.site-subtitle span'),
//             $hMenu = $headerElement.find('.large-navigation-wrapper'),
//             $hLabel = $headerElement.find('.header-label'),
//             $hLabel_topText = $headerElement.find('.header-label__top-text'),
//             $hLabel_bottom_title_chars = $hLabel.find('.cls-1'),
//             $hLabel_top_title_chars = $hLabel.find('.cls-2'),
//             $hLabel_top_middle_small_text = $hLabel.find('.cls-3'),
//             $hLabel_top_middle_large_text = $hLabel.find('.cls-4'),
//             $hLabel_top_left_scope1 = $hLabel.find('.header-label__left-scope-1'),
//             // $hLabel_top_left_scope2 = $hLabel.find('.header-label__left-scope-2'),
//             $hLabel_top_right_scope1 = $hLabel.find('.header-label__right-scope-1'),
//             // $hLabel_top_right_scope2 = $hLabel.find('.header-label__right-scope-2'),
//             $hLabel_top_finish_scopes = $hLabel.find('.header-label__left-scope-2, .header-label__right-scope-2'),
//             $hLabel_title = $hLabel.find('title'),
//             $hLabel_left_p = $hLabel.find('.cls-5--left'),
//             $hLabel_right_p = $hLabel.find('.cls-5--right');
//
//         // advanced hide
//         var headerTimeLine = new TimelineMax().set($headerHiddenElements, {opacity: 0}).set($hLabel, {opacity: 1}).set($hLabel_top_title_chars, {opacity: 1}).set($hLabel_bottom_title_chars, {opacity: 1}).set('.header-menu li', {
//             opacity: 0,
//             y: 50
//         }).fromTo($logoElement, 1, {
//             x: -50,
//             autoAlpha: 1
//         }, {
//             x: 0,
//             opacity: 1
//         }, "+=1").fromTo($logoIcon, 1.5, {
//             x: 150,
//             opacity: 0
//         }, {
//             opacity: 1,
//             x: 0
//         }, "-=1").fromTo($logoTitle, 1, {
//             x: -150
//         }, {
//
//             x: 0
//         }, "-=1").fromTo($logoSeparator, 1, {
//             rotateY: 90
//         }, {
//
//             rotateY: 0,
//             opacity: 1
//         }, "-=0").fromTo($hAdress, 1, {
//             x: 100
//         }, {
//
//             x: 0,
//             opacity: 1
//         }, "-=1").fromTo($hPhone, 1, {
//             x: -50
//         }, {
//
//             x: 0,
//             opacity: 1
//         }, "-=0.5").fromTo($hTopAnother, 1, {
//             y: 10
//         }, {
//
//             y: 0,
//             opacity: 1
//         }).staggerFromTo($hTitleSpans, 2, {
//             y: 100
//         }, {
//             y: 0,
//             opacity: 1,
//             ease: Back.easeOut.config(1.2)
//         }, 0.15, "-=2").staggerFromTo($hSubTitle, 1.5, {
//             y: 75
//         }, {
//
//             y: 0,
//
//             opacity: 1
//         }, 0.35, "-=2")
//
//         // small left scope
//             .fromTo($hLabel_top_left_scope1, 1, {
//             drawSVG: "100% 100%"
//         }, {
//             drawSVG: "0% 100%",
//             opacity: 1,
//             ease: Back.easeOut.config(1.2)
//         }, "-=1")
//
//         // small right scope
//             .fromTo($hLabel_top_right_scope1, 1, {
//             drawSVG: "100% 100%"
//         }, {
//             drawSVG: "0% 100%",
//             opacity: 1,
//             ease: Back.easeOut.config(1.2)
//         }, "-=1")
//
//         // top title chars ~0.95
//             .staggerFrom($hLabel_top_title_chars, 0.5, {
//             attr: {
//                 transform: "translate(30,40) rotate(41.09)"
//             },
//             opacity: 0,
//             ease: Power2.easeInOut
//         }, 0.05, "-=0.5")
//
//         // small text-prefix ~0.25
//             .fromTo($hLabel_top_middle_small_text, 0.25, {
//             attr: {
//                 transform: "translate(39.125,43.07) scale(5,5)"
//             }
//
//         }, {
//             opacity: 1,
//             attr: {
//                 transform: "translate(78.25,43.07) scale(1,1)"
//             },
//             ease: Power2.easeInOut
//         }, "-=0.75")
//
//         // large middle numbers ~0.5
//             .fromTo($hLabel_top_middle_large_text, 0.5, {
//             attr: {
//                 transform: "translate(0,201) scale(2,2)"
//             },
//             opacity: 0
//
//         }, {
//             opacity: 1,
//             attr: {
//                 transform: "translate(32.25,139.03) scale(1,1)"
//             },
//             ease: Power2.easeInOut
//         }, "-=0.75")
//
//         // bottom title chars
//             .staggerFrom($hLabel_bottom_title_chars, 0.5, {
//             attr: {
//                 transform: "translate(107.33,186.24) rotate(-17.3)"
//             },
//             opacity: 0
//         }, 0.1, "-=0.5")
//
//         // final large 2 scopes
//             .fromTo($hLabel_top_finish_scopes, 0.5, {
//             drawSVG: "100% 100%"
//         }, {
//             drawSVG: "0% 85%",
//             opacity: 1,
//             ease: Back.easeOut.config(1.7)
//         }, "-=0.5")
//         // final large 2 scopes
//             .to($hLabel_top_finish_scopes, 0.5, {
//             drawSVG: "0% 100%",
//             opacity: 1,
//             ease: Back.easeOut.config(1.7)
//         }, "-=0.5")
//
//         // header menu timeline
//             .fromTo('.large-navigation-wrapper', 1, {
//             y: 50
//         }, {
//             y: 0,
//             opacity: 1,
//             clearProps: 'transform'
//         }, "-=1").staggerFromTo('.header-menu li', 1, {
//             y: 50
//         }, {
//             y: 0,
//             opacity: 1,
//             clearProps: 'transform, opacity'
//         }, 0.1, "-=0.5");
//
//         /**
//               * Create ScrollMagic scene of header block
//               */
//         new ScrollMagic.Scene({triggerElement: 'header'}).setTween(headerTimeLine).addTo(scrollMagicController);
//
//         /** ********END Animation for HEADER ****************/
//
//         /** ********START Animation for FOOTER ****************/
//
//         var $footerTextLines = $('.footer-contacts__line, .footer-contacts__title');
//         var $footerMapImg = $('.footer-map-preview > img');
//         var $footerMapBtn = $('.footer-map-preview__btn');
//         var $footer_list = $('.footer__list > li');
//         var $footer_other = $('.footer__visa-comments .row, .footer__copyright .row');
//
//         new ScrollMagic.Scene({triggerElement: 'footer', reverse: false}).setTween(new TimelineMax().set([
//             $footerTextLines, $footerMapImg, $footer_list, $footer_other
//         ], {opacity: 0}).set($footerMapBtn, {
//             opacity: 0,
//             transition: 'none'
//         }).staggerFromTo($footerTextLines, 0.5, {
//             y: -30
//         }, {
//             y: 0,
//             autoAlpha: 1,
//             ease: Back.easeOut.config(1.4)
//         }, 0.1).fromTo($footerMapImg, 1, {
//             y: 90,
//             opacity: 0
//         }, {
//             y: 0,
//             opacity: 1,
//             ease: Back.easeOut.config(1.7)
//         }, "0").to($footerMapBtn, 0.5, {
//             scale: 0.3,
//             //  opacity: 0,
//             onComplete: function() {
//                 TweenMax.to($footerMapBtn, 1.4, {
//                     scale: 1,
//                     opacity: 1,
//                     ease: Elastic.easeOut,
//                     easeParams: [
//                         1, 0.3
//                     ],
//                     clearProps: "transform"
//                 })
//             }
//         }, "-=0.5").staggerFromTo($footer_list, 0.5, {
//             x: -20
//         }, {
//             x: 0,
//             opacity: 1
//         }, 0.15, "-=0.25").staggerFromTo($footer_other, 0.5, {
//             y: 20
//         }, {
//             y: 0,
//             opacity: 1
//         }, 0.15, "-=0.25")).addTo(scrollMagicController);
//
//         /**
//               * ANINAMTIONS FOR EACH SECTION
//               *
//               */
//         $("section").each(function(index, elem) {
//
//             //  //  Animation for all forms inside the sections
//             //    var form = $('form', this);
//             //    if( form ) {
//             //      var formElements = $('.form-group, .btn', form);
//             //      TweenMax.set(formElements, {css:{opacity: 0, transformStyle:"preserve-3d"}});
//             //      var tweenForm = new TimelineMax()
//             //        .to(formElements, .2, {css:{rotationY:18, z:-180}, ease:Power2.easeOut})
//             //        .to(formElements, .5, {css:{rotationY:0, z:0, opacity: 1}});
//             //        new ScrollMagic.Scene({
//             //             reverse: false,
//             //              // duration: 200,
//             //              triggerElement: elem,
//             //              // triggerHook: "onCenter",
//             //          })
//             //        .setTween(tweenForm)
//             //        .addTo(scrollMagicController);
//             //
//             //    }
//
//             //  Animation for square items in the sections (not how-we-works)
//
//             if (!$(this).hasClass('how-we-works')) {
//
//                 var squareItem = $('.square-item', this);
//
//                 var squareItemImgWrapper = $('.square-item__img-wrapper', squareItem);
//                 var squareItemImg = $('.square-item__img', squareItem);
//                 var squareItemDesc = $('.square-item__desc', squareItem);
//
//                 var tl_sq1 = TweenMax.staggerFrom(squareItemImgWrapper, 0.5, {
//                     opacity: 0,
//                     x: -15,
//                     clearProps: 'transform'
//                 }, .15);
//
//                 var tl_sq2 = new TimelineMax()
//                 // .set(squareItemImg, {
//                 //   clearProps:"transform"
//                 // })
//                 // .staggerFromTo(
//                 //     CSSRulePlugin.getRule(".how-we-works .square-item__img-wrapper:before"), 1,
//                 //     {cssRule:{opacity: 0}},
//                 //     {cssRule:{opacity: 1}},
//                 //     0.15
//                 // )
//                     .staggerFrom(squareItemImg, 0.5, {
//                     delay: 0.25,
//                     scale: 1.25,
//                     rotateX: -25
//                 }, .15);
//
//                 var tl_sq3 = TweenMax.staggerFrom(squareItemDesc, 0.5, {
//                     delay: 0.25,
//                     opacity: 0,
//                     x: -15
//                 }, .15);
//
//                 new ScrollMagic.Scene({reverse: false, triggerElement: elem, offset: 0}).setTween(new TimelineMax().add([tl_sq1, tl_sq2, tl_sq3])).addTo(scrollMagicController);
//             }
//
//             // animations only for how-we-works
//             if ($(this).hasClass('how-we-works')) {
//
//                 var $squareItem = $('.square-item', this);
//
//                 $squareItem.each(function(i, squareItem) {
//
//                     var $squareItemImgWrapper = $('.square-item__img-wrapper', squareItem);
//                     var $squareItemImg = $('.square-item__img', squareItem);
//                     var $squareItemDesc = $('.square-item__desc', squareItem);
//                     var k = i + 1;
//                     var separatorItem = ".how-we-works .square-item--" + k + ":after";
//                     new TweenMax.set([
//                         $squareItemImgWrapper, $squareItemDesc
//                     ], {opacity: 0});
//                     new TweenMax.set(CSSRulePlugin.getRule(separatorItem), {
//                         cssRule: {
//                             width: 0,
//                             opacity: 0
//                         }
//                     });
//                     var tl_squareItem = new TimelineMax().fromTo($squareItemImgWrapper, .25, {
//
//                         rotationY: 180,
//                         transformOrigin: "left 50% -15",
//
//                         ease: Power1.easeInOut
//                     }, {
//                         opacity: 1,
//                         rotationY: 0,
//                         z: 400,
//                         delay: i*0.5 + .5,
//                         onComplete: function() {
//                             new TimelineMax().fromTo(CSSRulePlugin.getRule(separatorItem), 0.5, {
//                                 cssRule: {
//                                     width: 0,
//                                     translateX: "-100%"
//                                 },
//                                 //  immediateRender: false // add this special property
//
//                             }, {
//                                 cssRule: {
//                                     opacity: 1,
//                                     width: '72px',
//                                     translateX: "-50%"
//                                 },
//                                 onComplete: function() {
//                                     new TimelineMax().fromTo($squareItemDesc, 0.5, {
//
//                                         x: 18,
//                                         ease: Power1.easeInOut
//                                     }, {
//                                         opacity: 1,
//                                         x: 0
//                                     }, "-=0.5");
//                                 }
//                             })
//
//                         }
//
//                     }, "-0.5");
//
//                     new ScrollMagic.Scene({reverse: false, triggerElement: elem, offset: 75, triggerHook: 100}).setTween(tl_squareItem).addTo(scrollMagicController);
//
//                 }) //end each loop qn
//
//             } // end if
//
//             // Animation for headers h2 in sections
//             var headerH2 = $('h2', this);
//             var headerSpan = $('h2 span', this);
//             // TweenMax.set(headerSpan, {autoAlpha: 0});
//             var tl_h_span = TweenMax.staggerFromTo(headerSpan, 1, {
//                 y: -110,
//                 opacity: 0
//             }, {
//                 y: 0,
//                 autoAlpha: 1,
//                 ease: Back.easeOut.config(1.4)
//             }, 0.1);
//
//             var isShortSection = $(this).hasClass('short-section') || $(this).hasClass('pay-with-card');
//             new ScrollMagic.Scene({
//                 reverse: false,
//                 triggerElement: elem,
//                 offset: isShortSection
//                     ? -70
//                     : 0
//             }).setTween(tl_h_span).on('enter', function() {
//                 headerH2.removeClass('beforeAnim');
//             }).on('leave', function() {
//                 headerH2.addClass('beforeAnim');
//             }).addTo(scrollMagicController);
//
//             // ANIMATION for section our-works
//             if ($(this).hasClass('our-works')) {
//                 var $gallery_container = $('.gallery__container');
//
//                 new ScrollMagic.Scene({reverse: false, triggerElement: elem, offset: -15}).setTween(new TimelineMax().set('.gallery__filter__btn, .pager-list', {opacity: 0}).set('.pager-list', {y: 20}).staggerTo('.gallery__filter__btn', 1, {
//                     opacity: 1
//                 }, 0.05).to('.pager-list', 1, {
//                     y: 0,
//                     opacity: 1
//                 }, "-=0.8")).addTo(scrollMagicController);
//
//             }
//
//             // ANIMATION for pay-with-card section
//             if ($(this).hasClass('pay-with-card')) {
//                 var $searchFormElements = $('.order-search__form .form-group'),
//                     $searchFormBtn = $('.order-search__form button');
//                 new ScrollMagic.Scene({reverse: false, triggerElement: elem, offset: 0}).setTween(new TimelineMax().set([
//                     $searchFormElements, $searchFormBtn
//                 ], {opacity: 0}).staggerFromTo($searchFormElements, 1, {
//                     y: -55
//                 }, {
//                     y: 0,
//                     autoAlpha: 1,
//                     ease: Back.easeOut.config(1.4)
//                 }, 0.2, "+=0.2").fromTo($searchFormBtn, 1, {
//                     y: 15
//                 }, {
//                     y: 0,
//                     autoAlpha: 1,
//                     ease: Back.easeOut.config(1.4)
//                 }, "-=1")).addTo(scrollMagicController);
//             }
//
//             // ANIMATION for section assortment
//             if ($(this).hasClass('assortiment')) {
//                 new ScrollMagic.Scene({reverse: false, triggerElement: elem, offset: 0}).setTween(new TimelineMax().set('.assortiment__item', {opacity: 0}).staggerFromTo('.assortiment__item', 1, {
//                     y: 50
//                 }, {
//                     opacity: 1,
//                     y: 0
//                 }, 0.05)).addTo(scrollMagicController);
//             }
//
//             // ANIMATION for section calculator
//             if ($(this).hasClass('calculator')) {
//                 new ScrollMagic.Scene({reverse: false, triggerElement: elem, offset: 0}).setTween(new TimelineMax().set('.subtitle', {opacity: 0}).set('.step', {
//                     opacity: 0,
//                     transformOrigin: "0 50%"
//                 }).fromTo('.subtitle', 1, {
//                     y: -55,
//                     opacity: 0
//                 }, {
//                     y: 0,
//                     autoAlpha: 1,
//                     ease: Back.easeOut.config(1.4)
//                 }, "+=0.2").staggerFromTo('.step', 1, {
//                     x: -20,
//                     scaleX: 0
//                 }, {
//                     opacity: 1,
//                     x: 0,
//                     scaleX: 1,
//                     transition: Back.easeOut.config(1.2)
//                 }, 0.3, "-=1")).addTo(scrollMagicController);
//
//                 // // PARALAX FOR CALCULATOR BG
//                 // var xPercentage = Modernizr.mq('(max-width: 959px)')
//                 //     ? "0"
//                 //     : "-0.02%";
//                 // var yPercentage = Modernizr.mq('(max-width: 959px)')
//                 //     ? "0"
//                 //     : "+20%";
//                 // var tl_calculator = new TimelineMax().to('.calculator .parallax-element', 1, {
//                 //     y: yPercentage,
//                 //     x: xPercentage,
//                 //     ease: Sine.easeInOut
//                 // });
//
//                 // new ScrollMagic.Scene({triggerHook: 'onCenter', triggerElement: '.calculator', offset: 50, duration: '200%'}).setTween(new TimelineMax().add([tl_calculator])).addTo(scrollMagicController);
//                 //
//                 //
//                 //
//                 //
//                 //
//
//             }
//
//             // ANIMATION FOR SHORT SECTIONS
//             if ($(this).hasClass('short-section')) {
//                 var $shortsection__link = $('.short-section__link, .short-section__li--sep', this);
//                 new ScrollMagic.Scene({reverse: false, triggerElement: elem, offset: 0}).setTween(new TimelineMax().set($shortsection__link, {opacity: 0}).fromTo($shortsection__link, 1, {
//                     y: 55
//                 }, {
//                     y: 0,
//                     opacity: 1,
//                     // ease: Back.easeOut.config(1.4)
//                 }, 0.15, "+=0.2")).addTo(scrollMagicController);
//
//             }
//
//             // //ANINAMATION for section 5
//             // if ($(this).hasClass('s5')) {
//             //
//             //   var compareElems = [];
//             //   var comparationLine = $('.comparation-line', this);
//             //   var successLoop = false;
//             //   comparationLine.each(function (i, el) {
//             //     var firstComarationColumn = $(el).find('.comparation-column').eq(0);
//             //     var secondComarationColumn = $(el).find('.comparation-column').eq(1);
//             //
//             //     var tl_cc_first = TweenMax.from(firstComarationColumn, 0.5, {delay: i/2, opacity: 0, x: -75});
//             //     var tl_cc_second = TweenMax.from(secondComarationColumn, 0.5, {delay: i/2, opacity: 0, x: 75});
//             //     compareElems.push(tl_cc_first, tl_cc_second);
//             //     if(i == comparationLine.length-1) successLoop = true;
//             //   });
//             //    if(successLoop) {
//             //      new ScrollMagic.Scene({
//             //            reverse: false,
//             //            triggerElement: elem,
//             //            offset: 0,
//             //        })
//             //      .setTween(new TimelineMax().add(compareElems))
//             //      .addTo(scrollMagicController);
//             //    }
//             //
//             //    /***** Comparation Results  *****/
//             //    var comparationResult = $('.comparation-result', this);
//             //    var tl_c_r = TweenMax.from(comparationResult, 0.75, {opacity:0, y: 75});
//             //    new ScrollMagic.Scene({
//             //          reverse: false,
//             //          triggerElement: '.comparation-results',
//             //          offset: '-250',
//             //      })
//             //      .setTween(tl_c_r)
//             //      .addTo(scrollMagicController);
//             // }
//
//             // Animation for some_list
//
//             var someItemImg = $('.some_list__item__img', this);
//             var someItemDesc = $('.some_list__item__desc', this);
//
//             if (someItemImg) {
//
//                 var tl_soImg = TweenMax.staggerFrom(someItemImg, 0.5, {
//                     opacity: 0,
//                     x: -15
//                 }, .15);
//
//                 var tl_soDesc = TweenMax.staggerFrom(someItemDesc, 0.5, {
//                     delay: 0.25,
//                     opacity: 0,
//                     x: -15
//                 }, .15);
//
//                 new ScrollMagic.Scene({reverse: false, triggerElement: elem, offset: 0}).setTween(new TimelineMax().add([tl_soImg, tl_soDesc])).addTo(scrollMagicController);
//
//             }
//
//         }); // loop ended
//
//         /**
//                   * END OF IF NOT MOBILE
//                   */
//
//         /**
//                  * ELSE IF MOBILE
//                  */
//         /**
//                   * END OF EACH SECTION ANIMATIONS LOOP
//                   */
//
//     } else {
//         // advanced show for large devices with touch
//         new TimelineMax().set($headerHiddenElements, {opacity: 1});
//     }
//
//     /********************************       GALLERY  - section s4      *******************/
//
//     /********************************       Calculator basic settings  - section s5      *******************/
//
//     /** First call && fileUpload settings **/
//
//     $('input:radio').removeAttr("checked");
//     $('input:checkbox').removeAttr("checked");
//     $('.forms_input').attr('disabled', true);
//     $('#block6 input[type=text]').attr('disabled', true);
//     for (var i = 2; i <= 8; i++) {
//         $('#block' + i + ' div.shadow').removeClass('shadow-hidden')/*.show()*/;
//     }
//     //$('.forms_input').attr('disabled',true);
//     $('.forms_input').val('');
//     $('.block6_input').val('');
//     $('#date_num_value').val(1);
//     dates_calc_init('datepicker', 0);
//     $('#cnt').val(1);
//     loadQTips('.question_form');
//     loadQTips('.question_dop');
//     loadQTips('.question_calendar');
//     loadQTips('.question_bank');
//     loadQTips('.question_dostavka');
//
//     /** jQuery FileUpload SetUp **/
//     var ul = $('#upload ul');
//
//     $('#drop a').click(function() {
//         // Simulate a click on the file input button
//         // to show the file browser dialog
//         $(this).parent().find('input').click();
//     });
//
//     // Initialize the jQuery File Upload plugin
//     $('#upload').fileupload({
//         // This element will accept file drag/drop uploading
//         dropZone: $('#drop'),
//         // This function is called when a file is added to the queue;
//         // either via the browse button, or via drag/drop:
//         add: function(e, data) {
//             // Выводим сообщение о допустимых типах файлов
//             //if(data.files[0]['type'] != 'image/png' && data.files[0]['type'] != 'image/jpg' && data.files[0]['type'] != 'image/jpeg'){ alert("Можно загрузить только файлы с расширениями: .png, .jpg, .jpeg"); return; }
//             //console.log(data);
//             //alert(data.files[0].name);
//             var tpl = $('<li class="working"><input type="text" value="0" data-width="26" data-height="26"' +
//             ' data-fgColor="#ff0000" data-readOnly="1" data-bgColor="#ff0000" /><p></p><span></span></li>');
//
//             // Append the file name and file size
//             tpl.find('p').text(data.files[0].name).append('<i>' + formatFileSize(data.files[0].size) + '</i>');
//
//             // Add the HTML to the UL element
//             data.context = tpl.appendTo(ul);
//             // Initialize the knob plugin
//             tpl.find('input').knob();
//             // Listen for clicks on the cancel icon
//             tpl.find('span').click(function() {
//                 if (tpl.hasClass('working')) {
//                     jqXHR.abort();
//                 }
//                 tpl.fadeOut(function() {
//                     tpl.remove();
//                 });
//
//             });
//             // Automatically upload the file once it is added to the queue
//             var jqXHR = data.submit();
//         },
//         progress: function(e, data) {
//             // Calculate the completion percentage of the upload
//             var progress = parseInt(data.loaded / data.total * 100, 10);
//             // Update the hidden input field and trigger a change
//             // so that the jQuery knob plugin knows to update the dial
//             data.context.find('input').val(progress).change();
//             if (progress == 100) {
//                 data.context.removeClass('working');
//             }
//         },
//
//         fail: function(e, data) {
//             // Something has gone wrong!
//             data.context.addClass('error');
//         }
//
//     });
//
//     // Prevent the default action when a file is dropped on the window
//     $(document).on('drop dragover', function(e) {
//         e.preventDefault();
//     });
//
//     // Helper function that formats the file sizes
//     function formatFileSize(bytes) {
//         if (typeof bytes !== 'number') {
//             return '';
//         }
//
//         if (bytes >= 1000000000) {
//             return (bytes / 1000000000).toFixed(2) + ' GB';
//         }
//
//         if (bytes >= 1000000) {
//             return (bytes / 1000000).toFixed(2) + ' MB';
//         }
//
//         return (bytes / 1000).toFixed(2) + ' KB';
//     }
//
//     /********************************       section s8 -- pay form settings      *******************/
//
//     $('.order-search__form').on('submit', function(e) {
//         e.preventDefault();
//         findOrder();
//         return false;
//     });
//
//     /********************************** SETTINGS FOR ALL FORMS INSIDE REMODAL *************************************/
//
//     $(document).on('opening', '.remodal', function(e) {
//         // $(e.target).hasClass('remodal--action');
//     });
//     $('.remodal--action').each(function() {
//         var $context = $(this),
//             $form = $(this).find('form'),
//             $form_id = $context.data('remodal-id');
//         $form.submit(function(e) {
//             e.preventDefault();
//         });
//
//         var rules = {},
//             messages = {};
//
//         var namespaces = ["user_name", "user_phone", "user_email"];
//         $.each(namespaces, function(i, value) {
//             var $form_elements = $('input[name^="' + value + '"], textarea[name^="' + value + '"]', $form);
//
//             $form_elements.each(function() {
//                 var elem_name = $(this).attr('name');
//                 var message;
//
//                 switch (value) {
//                     case "user_name":
//                         message = "Заполните Ваше имя";
//                         break;
//                     case "user_phone":
//                         message = "Не указан телефон";
//                         break;
//                     case "user_email":
//                         message = "Укажите корректный email";
//                         break;
//                     default:
//                         message = "Заполните данное поле";
//                         break;
//                 }
//                 rules[elem_name] = {
//                     required: true
//                 };
//                 if (value === 'user_phone') {
//                     $('input[name^="' + value + '"]').mask("+7 (999) 999 99 99");
//                     rules[elem_name].usPhoneFormat = true;
//                 }
//                 messages[elem_name] = {
//                     required: message
//                 }
//
//             });
//
//         })
//         // console.log(rules, messages);
//         $form.validate({
//             rules: rules,
//             messages: messages,
//             submitHandler: function(form) {
//                 submitRemodalForm(form, $form_id, $context);
//             }
//         });
//
//     });
//     function submitRemodalForm(form, task, $context) {
//         /**
//          * formPopupNumberId - is way to identify what type of form is present form - callback or baseOrder
//          */
//         var $form = $(form);
//         /*  prepare serialized array for the addition of a form type identifier  */
//         var form_data = $(form).serializeArray();
//         form_data.push({name: "task", value: task});
//         form_data = $.param(form_data);
//
//         if (task === 'order-now') {
//
//             sendOrder();
//             // return;
//         } else {
//
//             $.ajax({
//                 url: '/ajax.php',
//                 type: 'POST',
//                 data: form_data,
//
//                 beforeSend: function(r) {
//                     $form.hide();
//                     $('.remodal--action__title', $context).html('Отправка заявки...');
//                     $('.remodal__description', $context).html('');
//                     $('.submit-loader', $context).removeClass('submit-loader--paused');
//                     // $('.sweet-modal-content').append('<div class="sweet-modal-icon noBorder"><div class="loader_circle"> <div class="circle one"></div> <div class="circle two"></div> <div class="circle three"></div> </div></div>');
//
//                 }
//             }).always(function(r) {
//                 //(r)
//                 // alert('always');
//
//                 // $('.sweet-modal-content').html('<div class="sweet-modal-icon sweet-modal-success animate"> <span class="sweet-modal-line sweet-modal-tip animateSuccessTip"></span> <span class="sweet-modal-line sweet-modal-long animateSuccessLong"></span> <div class="sweet-modal-placeholder"></div> <div class="sweet-modal-fix"></div> </div><div class="success-text">Ваша заявка успешно отправлена</div>');
//             }).done(function(r) {
//                 // alert('done');
//                 $form.trigger('reset');
//                 setTimeout(function() {
//                     $('.remodal--action__title', $context).html('Благодарим!');
//                     $('.remodal__description', $context).html('Ваша заявка успешно отправлена!');
//                     $('.submit-loader', $context).addClass('submit-loader--paused');
//                     $('.success-icon', $context).fadeIn(800);
//                 }, 1000);
//
//             }).fail(function(request, textStatus, errorThrown) {
//                 // alert('fail');
//                 console.log(request.responseText);
//                 console.log(textStatus);
//                 console.log(errorThrown);
//             });
//
//         } // end else
//
//     };
//
//
//
//     /********************************      Footer -- map settings      *******************/
//     var myMap,
//         mapIsLoaded = false;
//
//
//     $('.footer-map-preview__btn').on('click', function() {
//
//         $('.site-footer').toggleClass('site-footer--map-expanded');
//
//         !mapIsLoaded && ($('.footer-map-preloader-overlay').fadeIn());
//         if (mapIsLoaded) {
//             return
//         }
//
//         load_script('//api-maps.yandex.ru/2.1/?lang=ru_RU', function() {
//
//             ymaps.ready(function() {
//                 $('.footer-map-preloader-overlay').fadeOut();
//                 YandexReadyHandlerSiteMap();
//
//                 mapIsLoaded = true;
//             });
//
//         });
//
//     });
//
//     function YandexReadyHandlerSiteMap() {
//         if (!myMap) {
//             myMap = new ymaps.Map("site-map", {
//                 center: [
//                     55.81764532573242, 37.575106041664064
//                 ],
//                 zoom: 17,
//                 controls: [
//                     "zoomControl", "routeEditor", "rulerControl"
//                 ],
//                 type: "yandex#map"
//             }, {suppressMapOpenBlock: true});
//             myMap.geoObjects.add(new ymaps.GeoObject({
//                 geometry: {
//                     type: "Point",
//                     coordinates: [55.816855509771, 37.574210183853]
//                 },
//                 properties: {
//                     balloonContent: decodeURIComponent("%3Cp%3E%0A%09%20%D0%B3.%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B5%20%D1%88%D0%BE%D1%81%D1%81%D0%B5%2C%20%D0%B4.11%0A%3C%2Fp%3E"),
//                     iconCaption: decodeURIComponent("%D0%B3.%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B5%20%D1%88%D0%BE%D1%81%D1%81%D0%B5%2C%20%D0%B4.11"),
//                     hintCaption: decodeURIComponent("%D0%B3.%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B5%20%D1%88%D0%BE%D1%81%D1%81%D0%B5%2C%20%D0%B4.11")
//                 }
//             }, {preset: "islands#redDotIconWithCaption"}));
//             myMap.geoObjects.add(new ymaps.GeoObject({
//                 geometry: {
//                     type: "Point",
//                     coordinates: [55.818645030304, 37.574513273471]
//                 },
//                 properties: {
//                     balloonContent: decodeURIComponent("%3Cp%3E%0A%09%D0%B3.%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%D0%BC.%20%D0%A2%D0%B8%D0%BC%D0%B8%D1%80%D1%8F%D0%B7%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%3Cbr%3E%0A%3C%2Fp%3E"),
//                     iconCaption: decodeURIComponent("C%D1%82%D0%B0%D0%BD%D1%86%D0%B8%D1%8F%20%D0%BC%D0%B5%D1%82%D1%80%D0%BE%20%D0%A2%D0%B8%D0%BC%D0%B8%D1%80%D1%8F%D0%B7%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F"),
//                     hintCaption: decodeURIComponent("C%D1%82%D0%B0%D0%BD%D1%86%D0%B8%D1%8F%20%D0%BC%D0%B5%D1%82%D1%80%D0%BE%20%D0%A2%D0%B8%D0%BC%D0%B8%D1%80%D1%8F%D0%B7%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F")
//                 }
//             }, {preset: "islands#blueCircleDotIconWithCaption"}));
//             myMap.geoObjects.add(new ymaps.GeoObject({
//                 geometry: {
//                     type: "LineString",
//                     coordinates: [
//                         [
//                             55.816872147601, 37.574191979669
//                         ],
//                         [
//                             55.816940105545, 37.574060551427
//                         ],
//                         [
//                             55.816805699736, 37.573419503473
//                         ],
//                         [
//                             55.81694010552, 37.573328308366
//                         ],
//                         [
//                             55.817349360806, 37.575138799451
//                         ],
//                         [
//                             55.817927363132, 37.574817841691
//                         ],
//                         [
//                             55.818532538874, 37.574475426259
//                         ],
//                         [
//                             55.818574822035, 37.574550528111
//                         ],
//                         [
//                             55.818621635453, 37.57452638823
//                         ],
//                         [55.818644287096, 37.574512977185]
//                     ]
//                 },
//                 properties: {
//                     balloonContent: decodeURIComponent(""),
//                     iconCaption: decodeURIComponent("%D0%9A%D0%B0%D0%BA%20%D0%B4%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BE%D1%82%20%D0%BC%D0%B5%D1%82%D1%80%D0%BE"),
//                     hintCaption: decodeURIComponent("%D0%9A%D0%B0%D0%BA%20%D0%B4%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BE%D1%82%20%D0%BC%D0%B5%D1%82%D1%80%D0%BE")
//                 }
//             }, {
//                 fillColor: "#1e98ff",
//                 strokeColor: "#1e98ff",
//                 fillOpacity: 0.35,
//                 strokeOpacity: 1.00000,
//                 strokeWidth: 4
//             }));
//             myMap.container.fitToViewport();
//             myMap.behaviors.disable('scrollZoom');
//             myMap.behaviors.disable('wheel');
//
//             return myMap;
//         } else {
//             myMap.destroy(); // Деструктор карты
//             myMap = null;
//         }
//     }
//
//     /********************************       GALLERY  - section s3      *******************/
//
//     /**
//    *  mixitup init
//    */
//
//     var galleryLimit;
//
//     var $window = $(window),
//         $galleryContainer = $('.gallery__container'),
//         $filters = $('.gallery__filter'),
//         $galleryPager = $('.gallery__pager');
//
//     function maxWidthCss(max) {
//         return Modernizr.mq('(max-width: ' + max + 'px)');
//     }
//
//     if (maxWidthCss(480)) {
//         galleryLimit = 4; // 50%
//         console.log('maxWidthCss 480');
//     } else if (maxWidthCss(541)) {
//         galleryLimit = 6; // 33.333%
//         console.log('maxWidthCss 541');
//     } else if (maxWidthCss(767)) {
//         galleryLimit = 8; // 25%
//         console.log('maxWidthCss 767');
//     } else if (maxWidthCss(1100)) {
//         console.log('maxWidthCss 1100');
//         galleryLimit = 15; // 20%
//     } else if (maxWidthCss(1550)) {
//         galleryLimit = 18; // 16.6666667
//         console.log('maxWidthCss 1550');
//     } else if (maxWidthCss(1920)) {
//         galleryLimit = 24; // 12.5%
//     } else {
//         galleryLimit = 36; // 8.33333333% for 4k
//     }
//
//     /* --- ON GALLERY RESIZE RECALCULATIONS --- */
//     function recalculateGallery() {
//
//         if ($('.gallery__container').length) {
//
//             function setGalleryLimit(limit) {
//                 var $galleryContainer = $('.gallery__container');
//                 // console.log(galleryLimit, 'current galleryLimit');
//                 // if ($galleryContainer.hasClass('explore')) return;
//                 if (limit != galleryLimit) {
//                     $galleryContainer.mixItUp('paginate', {
//                         limit: limit,
//                         page: 1
//                     })
//                     galleryLimit = limit;
//                 };
//             };
//
//             if (maxWidthCss(480)) {
//                 setGalleryLimit(4);
//             } else if (maxWidthCss(541)) {
//                 setGalleryLimit(6);
//             } else if (maxWidthCss(767)) {
//                 setGalleryLimit(8);
//             } else if (maxWidthCss(1100)) {
//                 setGalleryLimit(15);
//             } else if (maxWidthCss(1550)) {
//                 setGalleryLimit(18);
//             } else if (maxWidthCss(1920)) {
//                 setGalleryLimit(24);
//             } else {
//                 setGalleryLimit(36);
//             }
//
//         };
//
//     };
//
//     /* ====== ON RESIZE ====== */
//     $window.resize($.throttle(250, recalculateGallery)).trigger('resize');
//     $window.on('orientationchange', $.throttle(250, recalculateGallery));
//
//
//     // this function will be called when json will be ready
//     function getGallery(data) {
//
//         // console.log(data.stained);
//         var catergoriesArr = data; // array of objects
//
//         // for each catergory object
//         $.each(catergoriesArr, function(index, obj) {
//
//             var category_slug = obj.c, // get category name
//                 category_items = obj.i, // get category items
//                 numberOfMixDIVs = category_items.length; // get num of items in category
//             // $('#mixItUpContainer').mixItUp('destroy');
//
//             var galleryModal = $('[data-remodal-id="gallery__item"]').remodal({hashTracking: false});
//
//             // for each item we will create gallery item and will append it into gallery container
//             for (var i = 0; i < numberOfMixDIVs; i++) {
//
//                 // for first items from limit load images directly
//                 var sourceForImage = "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
//
//                 var $mixDiv = $('<div>' +
//                 '<div class="gallery__item__wrapper"> \
//                                       <a \
//                                         class="gallery__link ' + category_slug + '-category" \
//                                         data-title="' + category_items[i].t + '" \
//                                         data-exthumbimage="' + category_items[i].th + '" \
//                                         data-src="' + category_items[i].im + '" \
//                                         data-category="' + category_slug + '" \
//                                         data-sub-html="#gallery__item__description-' + category_slug + '-' + i + '"> \
//                                           <img class="gallery__img" src="' + sourceForImage + '" data-src="' + category_items[i].th + '" /> \
//                                           <span class="css_spinner wf"> <span class="side s_left"> <span class="fill"></span> </span> <span class="side s_right"> <span class="fill"></span> </span> </span>\
//                                       </a> \
//                                       <div class="gallery__item__short-name">' + category_items[i].t + '</div> \
//                                       <div class="gallery__item__description hidden" id="gallery__item__description-' + category_slug + '-' + i + '"> \
//                                            ' + category_items[i].d + ' \
//                                       </div> \
//                                     </div>' + '</div>').attr({"data-item-order": i}).addClass("mix " + category_slug + " gallery__item");
//
//                 $galleryContainer.append($mixDiv).contents().filter(function() {
//                     return this.nodeType === 3;
//                 }).remove();
//
//             } // END FOR loop
//
//         }); // END EACH loop
//
//         /** after items-load finish init filter **/
//         window.galleryIsLoaded = true;
//         /* INIT FILTER GALLERY */
//         function galleryFilter() {
//
//             var lightGalleryScene;
//
//             $galleryContainer.mixItUp({
//                 animation: {
//                     duration: 600,
//                     effects: 'fade',
//                     animateResizeContainer: false,
//                     includePadding: false
//                 },
//                 controls: {
//                     enable: true
//                 },
//                 pagination: {
//                     limit: galleryLimit,
//                     generatePagers: true
//                 },
//                 selectors: {
//                     pagersWrapper: '.gallery__pager-list'
//                 },
//                 load: {
//                     sort: 'random',
//                     filter: function() {
//                         //
//                         // // if we need to organize sorting (hash prepend value)
//                         // var hash = location.hash ? location.hash.substr(1) : false;
//                         //
//                         // if(hash && $filters.find('[data-filter=".'+hash+'"]').length) {
//                         // 	var $item = $filters.find('[data-filter=".'+hash+'"]');
//                         //
//                         // 	if($item.length) {
//                         //
//                         // 		$item.closest('ul').find('.label span').text($item.text());
//                         //
//                         // 		return '.'+hash;
//                         // 	}
//                         // }
//
//                         // default filter load all
//                         return 'all';
//                     }()
//                 },
//                 callbacks: {
//                     onMixLoad: function(state) {
//                         //first-time lazyLoad
//                         lazyLoad('.mix', function(loadedImages) {});
//
//                         $galleryContainer.mixItUp('setOptions', {
//                             animation: {
//                                 effects: 'fade scale',
//                                 animateResizeContainer: true
//                             }
//                         });
//
//                         setTimeout(function() {
//                             if (lightGalleryScene)
//                                 lightGalleryScene.data('lightGallery').destroy(true); // destroy lightGalleryScene
//                             lightGalleryScene = $galleryContainer.lightGallery({selector: '.gallery__link', selectWithin: $('.mix'), hash: false, download: false}); //re-initiate gallery
//                         }, 100);
//
//                         /**
//                    * START if is NOT mobile device
//                    */
//                         if (!isMobile.any && !is_android_default_bro) {
//                             var galleryOriginalHeight = $galleryContainer.prop('scrollHeight');
//
//                             $galleryContainer.css('height', 0);
//                             new ScrollMagic.Scene({reverse: false, triggerElement: $('.our-works'), offset: 0}).setTween(new TimelineMax().to('.gallery__container', 2, {
//                                 // tween from current height (0) to the original height
//                                 css: {
//                                     height: galleryOriginalHeight
//                                 },
//                                 // delay: 5
//                             })).addTo(scrollMagicController);
//                         }
//
//                         // tween from current height (0) to the original height
//                         // var gcIsLoaded = false;
//
//                         // console.log('onMixLoad terminated');
//                     },
//                     onMixStart: function(state, futureState) {
//
//                         var activeFilter = state.activeFilter.split('.')[1];
//                         // for .all filter select all categories
//                         if (futureState.activeFilter == '.mix') {
//                             setTimeout(function() {
//                                 if (lightGalleryScene)
//                                     lightGalleryScene.data('lightGallery').destroy(true); // destroy lightGalleryScene
//                                 lightGalleryScene = $galleryContainer.lightGallery({selector: '.gallery__link', selectWithin: $('.mix'), hash: false, download: false}); //re-initiate gallery
//                             }, 100);
//                             // else for each category reinit lightGallery separately
//                         } else {
//                             setTimeout(function() {
//                                 if (lightGalleryScene)
//                                     lightGalleryScene.data('lightGallery').destroy(true); // destroy lightGalleryScene
//                                 lightGalleryScene = $galleryContainer.lightGallery({
//                                     selector: futureState.activeFilter + '-category',
//                                     hash: false,
//                                     download: false
//                                     // selectWithin: $('.mix:visible')
//                                 }); //re-initiate gallery
//                             }, 100);
//                         }
//
//                         // if(futureState.activeFilter !== '.mix'){
//                         // 	var urlHash = futureState.activeFilter.substr(1);
//                         // 	location.hash = urlHash;
//                         // } else if(location.hash){
//                         // 	location.hash = 'all';
//                         // }
//                         //
//                         // if(history.replaceState) {
//                         // 	history.replaceState({}, '', window.location.href);
//                         // }
//                     },
//                     onMixEnd: function(state) {
//
//                         // console.log($galleryContainer.data('lightGallery'), '$galleryContainer');
//                     }
//                 }
//             });
//
//             function imgLoaded($img) {
//                 // find from the parents yourself wrapper and add visible class (make hidden loader and show image)
//                 $img.closest('.gallery__item__wrapper').addClass('loaded');
//             }
//
//             function lazyLoad(mixString, callback) {
//
//                 // for only visible items (limit for ALL variant filter)
//                 $galleryContainer.find(mixString).each(function() {
//
//                     var $img = $(this).find('img'),
//                         src = $img.attr('data-src'),
//                         $originalImg = $(this).find('.gallery__link').data('original-src');
//
//                     // after deferAllthumbsImages (function deferImages)
//                     $img.on('load', function() {
//                         imgLoaded($img);
//                     });
//
//                     /**
//                  * make defer loading for big image on link of the thumb
//                  * @param  {String} $originalImg - string will use to create new Image
//                  */
//                     if (!$img.hasClass('lazyloaded')) {
//                         // before click on the thumb we will preload his large image
//                         // deferImage($originalImg, function (e) {
//                         //
//                         // }
//                         // );
//                         $img.attr('src', src).addClass('lazyloaded');
//
//                     };
//
//                 });
//
//             };
//
//             //// END
//         }
//         // call FILTER GALLERY
//         galleryFilter();
//
//     } // end gallery-data func
//     $.ajax({
//         url: 'js/json/gallery-data.json', type: "GET", dataType: 'json',
//         // cache: true, // <-- turn ON on production
//     }).done(function(jsonData) {
//         getGallery(jsonData);
//
//     }).fail(function(request, textStatus, errorThrown) {
//         // console.log(request.responseText);
//         // console.log(textStatus);
//         // console.log(errorThrown);
//     }).always(function() {
//         // console.log('always')
//     });
//
//     /// prepare new slider
//
//     /**
//      * Parse content from hidden block in each slide
//      * @param  {HTMLELement} slide  - jQuery string
//      * @param  {HTMLELement} context - jQuery string
//      */
//     function getContentOfSlide(slide, context) {
//
//         var slideTitle = $('.remodal--gallery__slide__title', slide).html();
//         var slideDesc = $('.remodal--gallery__slide__desc', slide).html();
//         var $contextTitle = $('.remodal__title--asortiment', context);
//         var $contextDesc = $('.remodal__desc--asortiment', context);
//         var $contextCalcBtn = $('.remodal__calc-btn', context);
//         var slideHasMaterial = $('.remodal--gallery__slide__material', slide) && $('.remodal--gallery__slide__material', slide).hasClass('fullLoaded');
//         var $contextMaterialImg = $('.remodal--gallery__scene__material__img', context);
//         var slideMaterialImgSrc = $('.remodal--gallery__slide__material', slide).attr('src');
//
//         // dynamic data with transitions
//         $contextTitle.add($contextDesc).addClass('short_hidden').afterTransition(function() {
//             $contextTitle.html(slideTitle);
//             $contextDesc.html(slideDesc);
//             $contextTitle.add($contextDesc).removeClass('short_hidden');
//         });
//
//         $contextCalcBtn.addClass('short_shuffle').afterTransition(function() {
//             $contextCalcBtn.removeClass('short_shuffle');
//         })
//
//         // if item with material preview is not empty and it image source isLoaded fully - get this
//         if (slideHasMaterial) {
//             $contextMaterialImg.parent().addClass('shortInvisible').afterTransition(function() {
//                 $contextMaterialImg.fadeOut(200, function() {
//                     $contextMaterialImg.attr('src', slideMaterialImgSrc);
//                     $contextMaterialImg.fadeIn(200);
//                     $contextMaterialImg.parent().removeClass('smallHiddenInRight').removeClass('shortInvisible');
//                 });
//
//             });
//         } else {
//             $contextMaterialImg.parent().addClass('smallHiddenInRight');
//         }
//
//         // prepare calc-button
//         var calcData = $('.calculator-data', slide);
//         var nameId = calcData.data('name-id') * 1,
//             materialId = calcData.data('materialId') * 1,
//             depth = calcData.data('depth')
//                 ? (calcData.data('depth') * 1)
//                 : false;
//
//         $contextCalcBtn.off("click").on('click', function() {
//
//             /** step 1 **/
//             loadMaterials(nameId, 'block2', function() {
//
//                 setBlock(3, function() {
//                     // check (1)
//                     $('[data-name-id="' + nameId + '"]').prop("checked", true);
//
//                     /** step 2 **/
//                     // loadMaterialImage(materialId); <== DON'T work
//                     loadTypes(materialId, 'block3', function() {
//                         // check (2)
//                         $('[data-material-id="' + materialId + '"]').prop("checked", true);
//
//                         setBlock(4, function() {
//                             Raschet();
//                             if (!depth)
//                                 return;
//
//                             /** step 3 **/
//                             loadFacet(depth);
//                             // check (3)
//                             $('[data-depth="' + depth + '"]').prop("checked", true);
//                             $('#block4 div.shadow').addClass('shadow-hidden');
//                             $('#block4 input[type=text] ').val('');
//                             $('#block4 input[type=radio] ').removeAttr('checked');
//                             $('#block4 input[type=text] ').attr('disabled', true);
//                             setBlock(5);
//                             Raschet();
//
//                         });
//
//                     });
//
//                 });
//             });
//
//             // clode remodal and make focus at step 4
//             $('.remodal-close', context).click().afterTransition(function() {
//
//                 var offset;
//                 if ($(".large-navigation-container").is(":visible") == true) {
//                     offset = $(".large-navigation-container").innerHeight();
//                 } else {
//                     offset = $(".short-navigation-wrapper").innerHeight();
//                 }
//                 offset = offset || 60;
//
//                 if (isMobile.apple.device || is_android_default_bro) {
//                     $('html, body').animate({
//                         scrollTop: $(depth
//                             ? "#block4"
//                             : "#block3").offset().top - offset
//                     }, 400);
//                     return;
//                 }
//                 TweenMax.to(window, 1.5, {
//                     scrollTo: {
//                         y: depth
//                             ? "#block4"
//                             : "#block3",
//                         offsetY: offset
//                     },
//                     ease: Expo.easeInOut
//                 });
//             });
//
//         });
//
//     }
//
//     /** LOOP FOR EACH GALLERY - ASSORTIMENT  **/
//     $(document).on('opening', '.remodal.remodal--gallery-assortiment', function(e) {
//
//         $('.slick-slider', $(e.target)).each(function() {
//             $(this).slick('setPosition');
//
//         });
//
//     });
//     $('.remodal.remodal--gallery-assortiment').each(function(i, gallery) {
//         var $gallery = $(gallery),
//             galleryId = '#' + $gallery.attr('id'),
//             $context = $gallery.parent();
//
//         var bigSliderSelector = galleryId + ' .big-image-slider',
//             bigSlideSelector = galleryId + ' .remodal--gallery-slider',
//             smallSliderSelector = galleryId + ' .small-image-slider',
//             smallSlideSelector = galleryId + ' .remodal--gallery__thumb',
//             $bigSlider = $(bigSliderSelector, $context),
//             $smallSlider = $(smallSliderSelector, $context);
//
//         var slidesLength = $(".remodal--gallery-slider", $context).length,
//             slidesToShow = 9,
//             centerMode = true,
//             variableWidth = false;
//
//         if (slidesLength < slidesToShow) {
//             slidesToShow = slidesLength;
//             centerMode = false;
//             variableWidth = true;
//         }
//
//         /** LARGE IMAGE SLIDER **/
//         $bigSlider.on('init beforeChange', function(event, slick, currentSlide, nextSlide) {
//             var slideIndex = (typeof nextSlide !== "undefined")
//                 ? nextSlide
//                 : (typeof currentSlide !== "undefined"
//                     ? currentSlide
//                     : 0);
//             var slide = $("[data-slick-index='" + slideIndex + "']", $context);
//             console.log('slideIndex: ', slideIndex);
//             console.log('slide: ', slide);
//             getContentOfSlide(slide, $context);
//         }).slick({
//             slide: bigSlideSelector,
//             asNavFor: smallSliderSelector,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             arrows: false,
//             fade: true,
//             cssEase: 'cubic-bezier(0.9, 0.00, 0.1, 1.0)',
//             speed: 800,
//             dots: false,
//             //  initialSlide: 0,
//         });
//
//         /** THUMBS SLIDER **/
//         $smallSlider.slick({
//             slide: smallSlideSelector,
//             slidesToShow: slidesToShow,
//             asNavFor: bigSliderSelector,
//             slidesToScroll: 1,
//             dots: false,
//             lazyLoad: 'progressive',
//             arrows: true,
//             centerMode: centerMode,
//             centerPadding: 0,
//             variableWidth: variableWidth,
//             swipeToSlide: true,
//             focusOnSelect: true,
//             //  initialSlide: 0,
//             cssEase: 'cubic-bezier(0.9, 0.00, 0.1, 1.0)',
//             speed: 800,
//             responsive: [
//                 {
//                     breakpoint: 1200,
//                     settings: {
//                         slidesToShow: slidesToShow,
//                         slidesToScroll: 1
//                     }
//                 }, {
//                     breakpoint: 1024,
//                     settings: {
//                         slidesToShow: slidesToShow - 1
//                     }
//                 }, {
//                     breakpoint: 979,
//                     settings: {
//                         slidesToShow: slidesToShow - 2
//                     }
//                 }, {
//                     breakpoint: 768,
//                     settings: {
//                         slidesToShow: slidesToShow - 5
//                     }
//                 }, {
//                     breakpoint: 480,
//                     settings: {
//                         slidesToShow: ((slidesToShow - 6) < 2)
//                             ? 2
//                             : slidesToShow - 6,
//                         variableWidth: false
//                     }
//                 }
//             ]
//         });
//
//     });
//
//     // bug fixes fore remodal
//     // [data-remodal-id="gallery__item"]
//     // $(document).on('opening', '.remodal', function () {
//     //   // galleryModal.state = 'opened';
//     // });
//
// }); //end final jquery
