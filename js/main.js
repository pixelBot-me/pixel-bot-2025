

jQuery(document).ready(function($) {

	"use strict";

	AOS.init({
		duration: 800,
		easing: 'slide',
		once: true
	});

	var lozadFunc = function() {
		const el = document.querySelectorAll('img');
		const observer = lozad(el);
		observer.observe();	
	}
	lozadFunc();

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {

			var counter = 0;
			$('.site-mobile-menu .has-children').each(function(){
				var $this = $(this);

				$this.prepend('<span class="arrow-collapse collapsed">');

				$this.find('.arrow-collapse').attr({
					'data-toggle' : 'collapse',
					'data-target' : '#collapseItem' + counter,
				});

				$this.find('> ul').attr({
					'class' : 'collapse',
					'id' : 'collapseItem' + counter,
				});

				counter++;

			});

		}, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
			var $this = $(this);
			if ( $this.closest('li').find('.collapse').hasClass('show') ) {
				$this.removeClass('active');
			} else {
				$this.addClass('active');
			}
			e.preventDefault();  

		});

		$(window).resize(function() {
			var $this = $(this),
			w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		
		// Close the menu and remove active class when clicking a menu link
		$('.site-mobile-menu a').on('click', function () {
			if ($('body').hasClass('offcanvas-menu')) {
			  $('body').removeClass('offcanvas-menu');
			  $('.js-menu-toggle').removeClass('active');
			}
		  });
		
		  // Handle resizing to remove offcanvas-menu class on larger screens
		  $(window).resize(function () {
			var $this = $(this),
			  w = $this.width();
		
			if (w > 768 && $('body').hasClass('offcanvas-menu')) {
			  $('body').removeClass('offcanvas-menu');
			  $('.js-menu-toggle').removeClass('active');
			}
		  });

		// click outisde offcanvas
		$(document).mouseup(function(e) {
			var container = $(".site-mobile-menu");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
					$('.js-menu-toggle').removeClass('active');
				}
			}
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
		$( "#slider-range" ).slider({
			range: true,
			min: 0,
			max: 500,
			values: [ 75, 300 ],
			slide: function( event, ui ) {
				$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			}
		});
		$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
			" - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	
	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
				center: false,
				items: 1,
				loop: true,
				stagePadding: 0,
				margin: 0,
				autoplay: true,
				nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
				responsive:{
					600:{
						margin: 0,
						nav: true,
						items: 2
					},
					1000:{
						margin: 0,
						stagePadding: 0,
						nav: true,
						items: 3
					},
					1200:{
						margin: 0,
						stagePadding: 0,
						nav: true,
						items: 4
					}
				}
			});
		}

		$('.slide-one-item').owlCarousel({
			center: false,
			items: 1,
			loop: true,
			stagePadding: 0,
			margin: 0,
			smartSpeed: 1000,
			autoplay: true,
			pauseOnHover: false,
			nav: true,
			navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
		});
	};
	siteCarousel();

	var siteStellar = function() {
		$(window).stellar({
			responsive: true,
			parallaxBackgrounds: true,
			parallaxElements: true,
			horizontalScrolling: false,
			hideDistantElements: false,
			scrollProperty: 'scroll'
		});
	};
	siteStellar();

	var siteCountDown = function() {

		$('#date-countdown').countdown('2020/10/10', function(event) {
			var $this = $(this).html(event.strftime(''
				+ '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
				+ '<span class="countdown-block"><span class="label">%d</span> days </span>'
				+ '<span class="countdown-block"><span class="label">%H</span> hr </span>'
				+ '<span class="countdown-block"><span class="label">%M</span> min </span>'
				+ '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});

	};
	siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	// navigation
	var OnePageNavigation = function() {
		var navToggler = $('.site-menu-toggle');
		$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function(e) {
			e.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				'scrollTop': $(hash).offset().top
			}, 600, 'easeInOutCirc', function(){
				window.location.hash = hash;
			});

		});
	};
	OnePageNavigation();

	var siteScroll = function() {



		$(window).scroll(function() {

			var st = $(this).scrollTop();

			if (st > 100) {
				$('.js-sticky-header').addClass('shrink');
			} else {
				$('.js-sticky-header').removeClass('shrink');
			}

		}) 

	};
	siteScroll();

});

// script for does not toggle in mobile device services menu
function toggleDropdown(element) {
	const parentLi = element.closest('li');
	const dropdownMenu = parentLi.querySelector('.dropdown-menu');
  
	if (dropdownMenu) {
	  // Toggle visibility of the dropdown
	  dropdownMenu.classList.toggle('active');
	}
  }
  
  // New function to handle navigation and prevent dropdown toggle for specific links
  function navigateToPage(event, url) {
	// Check if it's a mobile view
	if (window.innerWidth <= 767) {
	  window.location.href = url;
	} else {
	  // For desktop, let the dropdown toggle work
	  toggleDropdown(event.target);
	  window.location.href = url;
	}
  
	// Prevent the default link behavior
	event.preventDefault();
  }


//   our services section
const animatedEls = document.querySelectorAll("[data-animation]");

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		const animation = entry.target.getAttribute("data-animation");

		if (entry.isIntersecting) {
			entry.target.classList.add("animated", `${animation}`);
		} else {
			entry.target.classList.remove("animated", `${animation}`);
		}
	});
});

animatedEls.forEach((el) => observer.observe(el));


// bellow script for portfolio section 
const portfolioFigures = document.querySelectorAll('.portfolio-main figure');
const portfolioSidebarContent = document.querySelectorAll('.portfolio-content');
  
window.addEventListener('scroll', () => {
	portfolioFigures.forEach((figure, index) => {
	console.log("figure" + figure);
	console.log("index"  + index)

	const rect = figure.getBoundingClientRect();
	const inView = rect.top < window.innerHeight && rect.bottom > 0;

	if (inView) {
		portfolioSidebarContent.forEach((content) =>
		content.classList.remove('active')
		);
		portfolioSidebarContent[index].classList.add('active');
		figure.querySelector('img').classList.add('scroll-active');
	} else {
		figure.querySelector('img').classList.remove('scroll-active');
	}
	});
});
