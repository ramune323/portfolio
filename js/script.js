$(function() {
  // drawer
  $('.drawer').drawer();

  // textillate
  $('.js-top-title').textillate();
  $('.js-top-subtitle').textillate( {
    initialDelay: 1400
  });

  // wow
  new WOW().init();

  // smooth scroll
  jQuery('a[href^="#"]').click(function() {
    let speed = 300;
    let id = jQuery(this).attr("href");
    let target = jQuery("#" == id ? "html" : id);
    let position = jQuery(target).offset().top;
    jQuery("html, body").animate(
      {
        scrollTop: position
      },
      speed
    );
    return false;
  });

  // page_top
  $(function() {
    var pagetop = $('#page_top');
    pagetop.hide();
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        pagetop.fadeIn(300);
      }
      else {
        pagetop.fadeOut(300);
      }
    });
    pagetop.click(function() {
      $('body, html').animate({ scrollTop: 0 }, 500);
      return false;
    });
  });

  // elevator menu
  $(window).on('load resize', function() {
    var stepMenu = function() {
      var array = {
        '#top': 0,
        '#about': 0,
        '#skills': 0,
        '#works': 0,
        '#contact': 0
      };
     
      var $globalNav = new Array();
     
      for (var key in array) {
        if ($(key).offset()) {
          array[key] = $(key).offset().top - 10;
          $globalNav[key] = $('.header-nav-item a[href="' +key+ '"]');
        }
      }
     
      $(window).on('load resize scroll', function () {
        for (var key in array) {
          if ($(window).scrollTop() > array[key] - 10) {
            $('.header-nav-item a').each(function() {
              $(this).removeClass('current');
            });
          $globalNav[key].addClass('current');
          }
        }
      });
    }
    stepMenu();
  });

  // vivus
  new Vivus('mask', {
    type: 'oneByOne',
    duration: 190,
    forceRender: false,
    animTimingFunction: Vivus.EASE
  })
});