$(document).ready(function() {

    $('.menu-item').hover(function(){
		$(this).toggleClass('open');
		$(this).find('div.wrapper-menu').toggleClass('open');
	});



	$('.slider-catalog').slick({
		arrows: true,
		// infinite: true,
		// mobileFirst: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		speed: 1000,
		responsive: [
			{
			  breakpoint: 960,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			  }
			},
			{
			  breakpoint: 640,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				// centerMode: true
			  }
			},
			{
			  breakpoint: 450,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				// centerMode: true
			  }
			}
		  ]
  	
		});
		$('.slider-comments').slick({
			arrows: true,
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 2,
			speed: 1000,
			responsive: [
				{
					breakpoint: 800,
					settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					// centerMode: true
					}
				}
				]
			
			});


	$('.menu-icon').click(function(){
		$(this).toggleClass('open');
		$(this).next('ul.menu').toggleClass('open');
	});

	
});