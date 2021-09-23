

/**
 * @name initHeaderFixed
 *
 * @description Fixing the site header in the scrolling page.
 */
const initHeaderFixed = () => {
  const getCurrentScroll = () => window.pageYOffset || document.documentElement.scrollTop;
  const shrinkHeader = 80;
  
  $(window).scroll(() => {
    let scroll = getCurrentScroll();
  
    (scroll >= shrinkHeader) ? $('.header').addClass('is-fixed') : $('.header').removeClass('is-fixed');
  });
};
