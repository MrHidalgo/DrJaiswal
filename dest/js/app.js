"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - preventBehavior.js;
*
* ============================
* ============================
* */

/**
 * @name initHamburger
 *
 * @description Init hamburger logic with animated
 */
var initHamburger = function initHamburger() {

  var btn = document.querySelector("[hamburger-js]"),
      hideScrollContainer = document.querySelectorAll("html, body"),
      mobileContainer = document.querySelector("[mobile-block-js]");

  /**
    * @description
   */
  btn.addEventListener("click", function (ev) {
    var elem = ev.currentTarget;

    elem.classList.toggle("is-active");
    mobileContainer.classList.toggle("is-open");

    hideScrollContainer.forEach(function (val, idx) {
      val.classList.toggle("is-hideScroll");
    });
  });
};

/**
 * @name initHeaderFixed
 *
 * @description Fixing the site header in the scrolling page.
 */
var initHeaderFixed = function initHeaderFixed() {
  var getCurrentScroll = function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  };
  var shrinkHeader = 80;

  $(window).scroll(function () {
    var scroll = getCurrentScroll();

    scroll >= shrinkHeader ? $('.header').addClass('is-fixed') : $('.header').removeClass('is-fixed');
  });
};

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

  var link = document.querySelectorAll("a");

  link.forEach(function (val, idx) {

    val.addEventListener("click", function (e) {
      if (val.getAttribute("href") === "#") {
        e.preventDefault();
      }
    });
  });
};

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
var initSwiper = function initSwiper() {

  if ($('.beforeAfter').length) {
    for (var i = 1; i <= $('.beforeAfter__slider').length; i++) {
      var delay = 5000;

      new Swiper('.beforeAfterSlider' + i, {
        effect: 'slide',
        speed: 1500,
        autoplay: {
          delay: delay + i * 1000
        },
        slidesPerView: 'auto',
        spaceBetween: 15
      });
    }
  }

  if ($('.testimonials').length) {
    new Swiper('.testimonialsSlider', {
      effect: 'slide',
      speed: 1500,
      slidesPerView: 1,
      spaceBetween: 15,
      autoplay: {
        delay: 5000
      },
      navigation: {
        nextEl: '.testimonials__slider-btn--next',
        prevEl: '.testimonials__slider-btn--prev'
      }
    });
  }
};

/**
 * @description Window on load.
 */
$(window).on("load", function (ev) {
  // initHeaderFixed();
});

/**
 * @description Window on resize.
 */
$(window).on("resize", function (ev) {});

/**
 * @description Window on scroll.
 */
$(window).on("scroll", function (ev) {
  // initHeaderFixed();
});

/**
 * @description Document DOM ready.
 */
(function () {
  /*
  * CALLBACK :: start
  * ============================================= */
  var menuToggle = function menuToggle() {
    $('.menu__btn').hover(function (ev) {
      var el = $(ev.currentTarget),
          elID = el.attr('data-id');

      if ($(window).width() >= 768) {
        $('.menu__btn').removeClass('is-hover');
        el.addClass('is-hover');

        $('.menu__content').hide();
        $('.menu__content[data-content-id="' + elID + '"]').fadeIn(500);
      }
    }, function (ev) {});

    $('.menu__link-wrapper').hover(function (ev) {}, function (ev) {
      if ($(window).width() >= 768) {
        $('.menu__btn').removeClass('is-hover');
        $('.menu__content').hide();
      }
    });
  };

  var faqToggle = function faqToggle() {
    $('.faq__collapse-head').on('click', function (ev) {
      var el = $(ev.currentTarget),
          elParent = el.parent();

      if (elParent.hasClass('is-active')) {
        elParent.removeClass('is-active');
        elParent.find('.faq__collapse-body').slideUp(350);
      } else {
        elParent.addClass('is-active');
        elParent.find('.faq__collapse-body').slideDown(350);
      }
    });
  };
  /*
  * CALLBACK :: end
  * ============================================= */

  /**
   * @name initNative
   *
   * @description Init all method
   */
  var initNative = function initNative() {
    // default
    initPreventBehavior();
    // ==========================================

    // lib
    initSwiper();
    initHeaderFixed();
    initHamburger();
    // ==========================================

    // callback
    menuToggle();
    faqToggle();
    // ==========================================
  };
  initNative();
})();