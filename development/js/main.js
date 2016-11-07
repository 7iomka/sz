

jQuery(document).ready(function($) {
    // var $window = $(window),
    //     $body = $('body');


        // ----------------------------------------------------------------------------
        // Reviews slider
        // ----------------------------------------------------------------------------
        var reviewsSlider = new Swiper('.swiper-container', {
                nextButton: '.swiper-button-next',
                 prevButton: '.swiper-button-prev',
                   pagination: '.swiper-pagination',
                 loop: true,
                effect: 'coverflow',
                // autoHeight: true,
                // nested: true,
                // virtualTranslate: true,
                // grabCursor: true,
                initialSlide: 2,
                //  loopAdditionalSlides: 5,
                 paginationClickable: true,
                 centeredSlides: true,
                 slidesPerView: 'auto',
                 slideToClickedSlide: true,
                //  touchEventsTarget: "wrapper",
                coverflow: {
                    rotate: 0,
                    stretch: 195,
                    depth: 50,
                    modifier: 1,
                    slideShadows : false
                },
                onSlideChangeEnd: function (s) { s.fixLoop(); }

                // tdFlow: {
            		// 	rotate : 0,
            		// 	stretch :0,
            		// 	depth: 200
            		// }

            });
            $('.review').on('click', function(e){
                e.preventDefault();
                $(this).parent().click();
            // return false;
              })


      // ----------------------------------------------------------------------------
      // Init gallery for each review
      // ----------------------------------------------------------------------------
      // var lightGalleryScene = $('.swiper-container').lightGallery({
      //     selector: '.review',
      //      selectWithin: $('.swiper-slide'),
      //       hash: false,
      //        download: false
      //      });


});
