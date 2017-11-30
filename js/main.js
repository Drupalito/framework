
/**
 * subtheme_child Drupal Theme
 * JavaScript file for the theme.
 *
 * OWNER_NAME <OWNER_EMAIL>
 * (CURRENT_YEAR)
 */

var framework = {
  viewportWidth: jQuery('html').width(),
  viewportHeight: jQuery('html').height(),

  init: function() {

    framework.hamburgers();
    framework.smoothScroll('.scroll');

    // Open links in new window
    jQuery('body').on('click', 'a[rel*="external"]', function() {
      window.open(jQuery(this).attr('href'));
      return false;
    });

  },
  // Smooth scroll anchor or on top.
  // @example framework.smoothScroll('.scroll');
  smoothScroll: function(element) {
    jQuery(element).on('click', function (e) {
      e.preventDefault();
      var target = (this.hash) ? this.hash : 'html';
      jQuery('html, body').stop().animate({
        'scrollTop': jQuery(target).offset().top
      }, 900, function () {
        window.location.hash = target;
      });
    });
  },
  hamburgers: function() {
    var hamburgers = document.querySelectorAll('.hamburger');
    if (hamburgers.length > 0) {
      hamburgers.forEach(function (hamburger) {
        hamburger.addEventListener('click', function () {
          this.classList.toggle('is-active');
          jQuery('.navigation').toggleClass('is-opened');
        }, false);
      });
    }
  },
  navigation: function() {
    // Responsive menu use plugin
    jQuery('.navigation').navigation();
  },
  // Smooth counterUp.
  // @example framework.counterUp('.counter');
  counterUp: function(element) {
    if ($.fn.counterUp) {
      var element = (element) ? element : '.counter';
      $(element).counterUp({
        delay: 8,
        time: 1400
      });
    }
  },
  owlCarousel: function(element) {
    $(element).owlCarousel({
      items: 3,
      loop: true,
      center: true,
      autoplay: true,
      autoplayHoverPause: true,
      margin: 0,
      dots: true,
      nav: true,
      navText: [
        '<span aria-hidden="true" class="fa fa-angle-left"></span>',
        '<span aria-hidden="true" class="fa fa-angle-right"></span>'
      ],
    });
  },
  // Parallax Sections
  wowAnimation: function() {
    // if (!Modernizr.touch) { }
    new WOW().init();
  },
};

(function ($) {
  $(document).on('ready', function () {

    framework.init();
  });

  // $(window).on(
  //   'load', function () {
  //
  //   },
  //   'resize', function () {
  //
  //   }
  // );
})(jQuery);
