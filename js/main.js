
/**
 * [SITE_NAME] Drupal Theme
 * JavaScript file for the theme.
 *
 * [OWNER_NAME] <[OWNER_EMAIL]>
 * ([CURRENT_YEAR])
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
  navigation: function(element) {
    // Responsive menu use plugin
    if (jQuery.fn.navigation) {
      jQuery(element).navigation();
    }
  },
  // Smooth counterUp.
  // @example framework.counterUp('.counter');
  counterUp: function(element) {
    if (jQuery.fn.counterUp) {
      var element = (element) ? element : '.counter';
      jQuery(element).counterUp({
        delay: 8,
        time: 1400
      });
    }
  },
  owlCarousel: function(element, settings) {
    if (jQuery.fn.owlCarousel) {
      var defaults = {
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
      };
      var settings = jQuery.extend({}, defaults, settings || {});
      jQuery(element).owlCarousel(settings);
    }
  },
  // Parallax Sections
  wowAnimation: function() {
    // if (!Modernizr.touch) { }
    new WOW().init();
  },
  // jsSocials
  jsSocials: function() {
    if (jQuery.fn.jsSocials) {
      jQuery('#share').jsSocials({url: window.location.href,
        showLabel: false,
        showCount: 'inside',
        shares: ['facebook','linkedin','twitter','googleplus']
      });
    }
  },
  titleCollapse: function(element) {
    var selector = element + ' .block__title';
    var titleCollapseToggle = document.querySelectorAll(selector);
    if (titleCollapseToggle.length > 0) {
      complementaryToggle.forEach(function(complementary) {
        complementary.addEventListener('click', function() {
          this.classList.toggle('is-active');
          var $block_inner = jQuery(complementary).parent().find('.block__content');
          jQuery($block_inner).toggleClass('is-opened');
        }, false);
      });
    }

  },
};

(function ($) {
  $(document).on('ready', function () {

    framework.init();
    framework.titleCollapse('.complementary');
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
