/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* CALLBACK :: start
	* ============================================= */
	const menuToggle = () => {
		$('.menu__btn').hover(
			(ev) => {
				const el = $(ev.currentTarget),
					elID = el.attr('data-id');
				
				if($(window).width() >= 768) {
					$('.menu__btn').removeClass('is-hover');
					el.addClass('is-hover');
					
					$('.menu__content').hide();
					$('.menu__content[data-content-id="' + elID + '"]').fadeIn(500);
				}
			},
			(ev) => {},
		);
		
		$('.menu__link-wrapper').hover(
			(ev) => {},
			(ev) => {
				if($(window).width() >= 768) {
					$('.menu__btn').removeClass('is-hover');
					$('.menu__content').hide();
				}
			}
		);
	};
	
	const faqToggle = () => {
		$('.faq__collapse-head').on('click', (ev) => {
			const el = $(ev.currentTarget),
				elParent = el.parent();
			
			if(elParent.hasClass('is-active')) {
				elParent.removeClass('is-active');
				elParent.find('.faq__collapse-body').slideUp(350);
			} else {
				elParent.addClass('is-active');
				elParent.find('.faq__collapse-body').slideDown(350);
			}
		});
	};
	
	const scrollViewPortAnimation = () => {
		var wow = new WOW({
			boxClass: 'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset: 50,          // distance to the element when triggering the animation (default is 0)
			mobile: true,       // trigger animations on mobile devices (default is true)
			live: true,       // act on asynchronously loaded content (default is true)
			callback: function (box) {
				// the callback is fired every time an animation is started
				// the argument that is passed in is the DOM node being animated
			},
			scrollContainer: null,    // optional scroll container selector, otherwise use window,
			resetAnimation: true,     // reset animation on end (default is true)
		});
		
		wow.init();
	};
	/*
	* CALLBACK :: end
	* ============================================= */


	/**
	 * @name initNative
	 *
	 * @description Init all method
	 */
	const initNative = () => {
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
		scrollViewPortAnimation();
		// ==========================================
	};
	initNative();
})();
