$(function(){

	$('.burger').on('click', function(){
		$('.navigation__list').addClass('active');
	});

	$('.button-close, .navigation__list-item').on('click', function(){
		$('.navigation__list').removeClass('active');
	})

	$('.main-slider').slick({
		infinite: true,
		arrows: false,
		dots: true
	});

	$('.product__slider').slick({
		infinite: true,
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
	    {
	      breakpoint: 1540,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	     {
	      breakpoint: 1220,
	      settings: {
	        slidesToShow: 2,
	        centerPadding: '50px'
	      }
	    },
	    {
	      breakpoint: 640,
	      settings: {
	        slidesToShow: 1,
	        centerPadding: '20px'
	      }
	    }
	  ]
	});

	$('.partners-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '22%',
		responsive: [
	    {
	      breakpoint: 990,
	      settings: {
	      	centerPadding: '10%'
	      }
	    },
	    {
	      breakpoint: 640,
	      settings: {
	      	centerPadding: '4%'
	      }
	    }
	  ]
	});

	$('.slider-logotips').slick({
		arrows: false,
		infinite: true,
		slidesToShow: 7,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '50px',
		autoplay: true,
  		autoplaySpeed: 2000,
  		responsive: [
	    {
	      breakpoint: 1680,
	      settings: {
	        slidesToShow: 6
	      }
	    },
	     {
	      breakpoint: 1240,
	      settings: {
	        slidesToShow: 5
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 4
	      }
	    },
	    {
	      breakpoint: 640,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	})
// ......................Scroll........................

	$('a[href^="#"]').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		},800);
	});
});