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
	$(window).scroll(function () { 
		if ($(window).scrollTop() == 0) {
			$('#sitem').removeClass('active');
			$('#titem').removeClass('active');
			$('#fitem').addClass('active');
		}
		if ($(window).scrollTop() > 800 && $(window).scrollTop() < 1866) {
			$('#fitem').removeClass('active');
			$('#titem').removeClass('active');
			$('#sitem').addClass('active');
		}
		if ($(window).scrollTop() >= 1866) {
			$('#fitem').removeClass('active');
			$('#sitem').removeClass('active');
			$('#titem').addClass('active');
		}
	});
	$('.skill-per').each(function(){
        var $this = $(this);
        var per = $this.attr('per');
        $this.css("width",per+'%');
        $({animatedValue: 0}).animate({animatedValue: per},{
          duration: 1000,
          step: function(){
            $this.attr('per', Math.floor(this.animatedValue) + '%');
          },
          complete: function(){
            $this.attr('per', Math.floor(this.animatedValue) + '%');
          }
        });
      });
	// console.log();
})(jQuery);