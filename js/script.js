$(document).ready(function(){
	$("html, body").scrollTop("0");
	$("body").css({
		"opacity" : "1",
	});

	setTimeout(function(){
		$('h1').css({
			'transform' : 'translate(0,0)',
			'opacity' : '1'
		});

		$('.learn-more').css({
			'transform' : 'translate(0,0)',
			'opacity' : '1'
		});	

		$('.jumbotron .btn-success').css({
			'transform' : 'translate(0,0)',
			'opacity' : '1'
		});	

	}, 500);
	$('.navbar .container').css({
		'opacity' :'1',
		'transform' : 'translate(0,0)'
	});
});

$('.nav-link').on('click', function(e){
	$('.nav-link').removeClass('active');
	$(this).addClass('active');

	const section = $(this).attr('href');
	const sectionElement = $(section);

	$("html, body").animate({
		scrollTop : sectionElement.offset().top - 30
	}, 1000, 'easeInOutExpo');


	e.preventDefault();
});

$('.scrolltop').css({
	'opacity' : '0',
	'transform' : 'scale(1.25)',
	'transition' : '.8s'
});

$(window).scroll(function(){

	let muncul = $(this).scrollTop();

	if( muncul > 500 ){
		$('.scrolltop').css({
			'opacity' : '1',
			'transform' : 'scale(1)'
		});
	} else {
		$('.scrolltop').css({
			'opacity' : '0',
			'transform' : 'scale(1.25)'
		});
	}
});

$('.scrolltop').on('click', function(){
	$("html, body").animate({
		scrollTop : '0'
	}, 1000, 'easeInOutExpo');
});

