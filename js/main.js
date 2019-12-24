$(function(){

	$('.project-item__slider').slick({
		infinite: true,
		fade: false,
		nextArrow: '<img src="img/gallery-next.png" alt="">',
		prevArrow: '<img src="img/gallery-prev.png" alt="">',
		responsive: [
			{
				breakpoint: 800,
				settings: {
					arrows:false,
				}
			},
		]			
	});

	$('.projects__single-slider').slick({
		infinite: true,
		arrows: true,
		nextArrow: '<img src="img/slider-arr-black.png" alt="">',
		prevArrow: '<img src="img/slider-arr-black.png" alt="">',
	});

	$('.same-projects__slider').slick({
		infinite: false,
		fade: false,
		dots: true,
		arrows: false,
		swipe: false,
		slidesToShow: 2,
		responsive: [
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});

	$('.imax').magnificPopup({
		type: 'image',
		mainClass: 'mfp-with-zoom', 
		gallery:{
			enabled:true
				},
	  zoom: {
    enabled: true, 
    duration: 300, 
    easing: 'ease-in-out', 
    opener: function(openerElement) {
      return openerElement.is('img') ? openerElement : openerElement.find('img');
	  	}
		}
	});

 $('.tabs .tab').on('click' ,function(event) {
  let id = $(this).attr('data-id');
    $('.tabs-content').find('.tab-item').removeClass('active-tab').hide();
    $('.tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#'+id).addClass('active').fadeIn();

    $(".project-item__slider").slick('setPosition');    
    return false;
  });

 $('.callback-btn').magnificPopup();



});