

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
const initSwiper = () => {

  if($('.beforeAfter').length) {
    for(let i = 1; i <= $('.beforeAfter__slider').length; i++) {
      let delay = 5000;
    
      new Swiper('.beforeAfterSlider' + i, {
        effect: 'slide',
        speed: 1500,
        autoplay: {
          delay: delay + (i * 1000),
        },
        slidesPerView: 'auto',
        spaceBetween: 15
      });
    }
  }
  
  if($('.testimonials').length) {
    new Swiper('.testimonialsSlider', {
      effect: 'slide',
      speed: 1500,
      slidesPerView: 1,
      spaceBetween: 15,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: '.testimonials__slider-btn--next',
        prevEl: '.testimonials__slider-btn--prev',
      },
    });
  }
};
