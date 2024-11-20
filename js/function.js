(function ($) {
	"use strict";

	var $window = $(window);
	var $body = $('body');

	$('#menu').slicknav({
		label: '',
		prependTo: '.responsive-menu'
	});


	/* youtube video pop up */

	$(document).ready(function() {
		$('.popup-youtube').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	});

	/** client testimonial slider **/

	var clienttestimonial= new Swiper(".client-testimonial-slider", {
		autoplay: {
			delay: 3000,
		},
		speed: 1700,
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,

		breakpoints: {
			375: {
				slidesPerView: 1
			},
			768: {
				slidesPerView: 2
			},
			991: {
				slidesPerView: 3
			}
		}

	});

	/** counter js **/ 
	$('.counter').counterUp({ delay: 5, time: 2500 });

	/* Animated Wow Js */
	new WOW().init();

})(jQuery);