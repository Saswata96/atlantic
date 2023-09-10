// JavaScript Document


$(document).ready(function (e) {

	// for home slider
	$(".home-banner-slider").owlCarousel({
		loop: true,
		autoplay: true,
		autoPlaySpeed: 5000,
		autoplayTimeout: 5000,
		navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
		// smartSpeed: 3000,
		singleItem: true,
		items: 1,
		itemsDesktop: false,
		itemsDesktopSmall: false,
		itemsTablet: false,
		itemsMobile: false,
		responsive: {
			0: {
				items: 1,
				dots: true,
				nav: false
			},
			767: {
				items: 1,
				dots: true,
				nav: false
			},
			1000: {
				items: 1,
				dots: false,
				nav: true
			}
		}
	});

	//testimonial owl carousel slider 	
	var owl = $('.testimonial-slider');
	owl.owlCarousel({
		margin: 40,
		navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
		loop: true,
		autoplay: true,
		autoPlaySpeed: 5000,
		autoplayTimeout: 5000,
		responsive: {
			0: {
				items: 1,
				dots: true,
				nav: false
			},
			767: {
				items: 1,
				dots: true,
				nav: false
			},
			1000: {
				items: 1,
				dots: false,
				nav: true
			}
		}
	});
	// featured-items-card-slider
	var owl = $('.featured-items-card-slider');
	owl.owlCarousel({
		margin: 40,
		navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
		loop: true,
		autoplay: true,
		autoPlaySpeed: 5000,
		autoplayTimeout: 5000,
		responsive: {
			0: {
				items: 1,
				dots: true,
				nav: false
			},
			767: {
				items: 2,
				dots: true,
				nav: false
			},
			1000: {
				items: 3,
				dots: false,
				nav: true
			}
		}
	});
	//   nav js
	const navbarMenu = document.getElementById("menu");
	const burgerMenu = document.getElementById("burger");
	const bgOverlay = document.getElementById("overlay");

	// Show Menu when Click the Burger
	// Hide Menu when Click the Overlay
	if (burgerMenu && navbarMenu && bgOverlay) {
		burgerMenu.addEventListener("click", () => {
			navbarMenu.classList.toggle("is-active");
			bgOverlay.classList.toggle("is-active");
		});

		bgOverlay.addEventListener("click", () => {
			navbarMenu.classList.toggle("is-active");
			bgOverlay.classList.toggle("is-active");
		});
	}

	// Hide Menu when Click the Links
	document.querySelectorAll(".menu-link").forEach((link) => {
		link.addEventListener("click", () => {
			navbarMenu.classList.remove("is-active");
			bgOverlay.classList.remove("is-active");
		});
	});

	// sticky header section
	$(window).on('scroll', function () {
		if ($(window).scrollTop()) {
			$('.header').addClass('sticky');
		}
		else {
			$('.header').removeClass('sticky');
		}
	});
	//   magnify-pop-up js

	$('.popup-youtube').magnificPopup({
		type: 'iframe'
	});

});
//-------------------------------pagination------------------------------

$(document).ready(function (e) {
	var activeSlider = $('.slider');
	$('.slider-pagination a').remove();


	// Find all slide elements within the slider-wrapper element and append a link for each slide to the slider-pagination element
	$('.slider-wrapper').find('.slide').each(function (index) {
		$('.slider-pagination').append('<a>' + (index + 1) + '</a>');
	});

	// Remove the 'current' class from the current link and the 'active' class from all slides
	$('.current').removeClass('current');
	$('.slide').removeClass('active');

	// Set the first slide to be the active slide and the first link to have the 'current' class
	activeSlider.find('.slider-wrapper > .slide:first-child').addClass('active').show();
	activeSlider.find('.pagination-btn-section > .slider-pagination a').first().addClass('current');


	// When a link is clicked within the slider-pagination element
	$('.slider-pagination a').click(function () {
		// Remove the 'current' class from the current link and add it to the clicked link
		$('.current').removeClass('current');
		$(this).addClass('current');

		var sliderInd = $(this).index();                                // Get the index of the clicked link and set the corresponding slide to be the active slide
		activeSlider.find('.slider-wrapper > .slide.active').removeClass('active').hide();
		activeSlider.find('.slider-wrapper > .slide').eq(sliderInd).fadeIn(250).addClass('active');
	});


	// For each slider element
	$('.slider').each(function () {
		var show = 5;                                                   // Set the number of links to show at one time to 5
		let dots = $('.slider-pagination').children('a');               // Get all links within the slider-pagination element
		let count_el = $('.slider-pagination').children('a').length;    // Get the total number of links within the slider-pagination element

		// If there are more links than the number to show
		if (dots.length > show) {
			// Hide links after the number to show
			$(this).find('.slider-pagination').children('a').slice(show).hide();
		}
		else {
			// Show all links
			$(this).find('.slider-pagination').children('a').slice(count_el).show();
		}
	});

});

$(document).ready(function (e) {
	var sliderPagers = $('.slider').find('.slider-pagination a'),       // Get all links within the slider-pagination element for the active slider
		lastElem = sliderPagers.last().index(),                         // Get the index of the last link within the slider-pagination element
		activeSlider = $('.slider'),                                    // Get the active slider element
		sliderTarget;


	// Update the slider
	function sliderResponse(sliderTarget) {
		sliderPagers.removeClass('current');
		sliderPagers.eq(sliderTarget).addClass('current');

		activeSlider.find('.slider-wrapper > .slide.active').hide().removeClass('active');
		activeSlider.find('.slider-wrapper > .slide').eq(sliderTarget).fadeIn(250).addClass('active');
	}


	// Handles next button click
	$('.slider-next').on('click', function () {
		lastElem = sliderPagers.length - 1;

		// Get index of currently active slider
		sliderTarget = activeSlider.find('.slider-pagination a.current').index();

		// Determine which slider to switch to
		if (sliderTarget === lastElem) {
			sliderTarget = 0;
		}
		else {
			sliderTarget = sliderTarget + 1;
		}

		// Update slider pagination
		sliderPagers.eq(sliderTarget).addClass('current').show();

		// Hide previous pagination elements if necessary
		if (sliderTarget > 4) {
			sliderPagers.eq(sliderTarget - 5).hide();
		}

		// Show all pagination elements if necessary
		if (sliderTarget == 0) {
			activeSlider.find('.slider-pagination').children('a').show();
			activeSlider.find('.slider-pagination a').slice(5).hide();
		}

		// Update slider response
		sliderResponse(sliderTarget);
	});


	// Handles previous button click
	$('.slider-previous').on('click', function () {
		lastElem = sliderPagers.length - 1;

		// Get index of currently active slider
		sliderTarget = activeSlider.find('.slider-pagination a.current').index();

		// Determine which slider to switch to
		if (sliderTarget === 0) {
			sliderTarget = lastElem;
			sliderPagers.eq(lastElem).addClass('current').show();
		}
		else {
			sliderTarget = sliderTarget - 1;
			sliderPagers.eq(sliderTarget).addClass('current').show();
		}

		// Hide next pagination elements if necessary
		if (sliderTarget < sliderPagers.length - 5) {
			sliderPagers.eq(sliderTarget + 5).hide();
		}

		// Show all pagination elements if necessary
		if (sliderTarget == lastElem) {
			activeSlider.find('.slider-pagination').children('a').show();
			activeSlider.find('.slider-pagination a').slice(0, -5).hide();
		}

		// Update slider response
		sliderResponse(sliderTarget);
	});
});



wow = new WOW(
	{

		offset: 100
	}
);
wow.init();


new WOW().init();