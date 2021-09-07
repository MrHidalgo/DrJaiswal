

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
const initSwiper = () => {

  if($('.beforeAfter').length) {
    for(let i = 1; i <= $('.beforeAfter__slider').length; i++) {
      let speed = 4000;
    
      new Swiper('.beforeAfterSlider' + i, {
        effect: 'slide',
        speed: speed + (i * 1000),
        autoplay: {
          delay: 5000,
        },
        slidesPerView: 'auto',
        spaceBetween: 15
      });
    }
  }
};
