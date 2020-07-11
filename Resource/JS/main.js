(function($){
    'use strict';
    var nav_offset_top = $('header').height() + 50;
    function navbarFixed() {
		if ($('.header_area').length) {
			$(window).scroll(function() {
				var scroll = $(window).scrollTop();
				if (scroll >= nav_offset_top) {
					$('.header_area').addClass('navbar_fixed');
				} else {
					$('.header_area').removeClass('navbar_fixed');
				}
			});
		}
	}
    navbarFixed();
    $(window).on('load', function() {
		$('.portfolio-filter ul li').on('click', function() {
			$('.portfolio-filter ul li').removeClass('active');
			$(this).addClass('active');

			var data = $(this).attr('data-filter');
			$workGrid.isotope({
				filter: data
			});
		});

		if (document.getElementById('portfolio')) {
			var $workGrid = $('.portfolio-grid').isotope({
				itemSelector: '.all',
				percentPosition: true,
				masonry: {
					columnWidth: '.all'
				}
			});
		}
	});
	$('#aboutClick').on('click', function(){
        $('html, body').animate({
            scrollTop: $('#about').offset().top
		}, 500,
		function () { 
			$('#fitem').removeClass('active');
			$('#sitem').addClass('active');
		})
	})
	$('#portfolioClick').on('click', function(){
        $('html, body').animate({
            scrollTop: $('#portfolio').offset().top
        }, 500,function () { 
			$('#fitem').removeClass('active');
			$('#sitem').removeClass('active');
			$('#titem').addClass('active');
		})
	})
	$('#homeClick').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 1000,function () { 
			$('#sitem').removeClass('active');
			$('#titem').removeClass('active');
			$('#fitem').addClass('active');
		})
    })
})(jQuery);