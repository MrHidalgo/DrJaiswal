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
 * @description Document DOM ready.
 */
(function () {
  /*
  * CALLBACK :: start
  * ============================================= */

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
    // ==========================================

    // callback
    // ==========================================
  };
  initNative();
})();