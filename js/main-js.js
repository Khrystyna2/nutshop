$(document).ready(function() {

    $('.menu-item').hover(function(){
		$(this).toggleClass('open');
		$(this).find('div.wrapper-menu').toggleClass('open');
	});



	$('.slick').slick({
		arrows: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 2
  	
	});
});