(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    // MENU
    $('.show-award').on('click', function() {
      $('.menu-items form').show();
		  $('.nomination-complete').hide();
      $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
      if ($('.show-award').hasClass('open')) {
        $('.menu-burger').html('<img src="images/award.png" alt="award"></img>')
      } else {
        $('.menu-burger').html('<img src="images/cancel.png" alt="cancel"></img>')
      }
      $('.show-award').toggleClass('open')
    });


    // ABOUT SLIDER
    $('body').vegas({
        slides: [
            { src: 'images/slide-image01.jpg' },
            //{ src: 'images/slide-image02.jpg' }
        ],
        timer: false,
        transition: [ 'zoomOut', ]
    });

})(jQuery);
