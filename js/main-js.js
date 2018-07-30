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
		// autoplay:true,
        // mobileFirst:true,
// 		centerMode: true,
		// variableWidth: true,
		responsive: [
			{
			  breakpoint: 960,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				// infinite: true,
				// centerMode: true
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


	$('.menu-icon').click(function(){
		$(this).toggleClass('open');
		$(this).next('ul.menu').toggleClass('open');
	});

	
});