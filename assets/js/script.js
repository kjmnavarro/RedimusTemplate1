$(document).ready(function() {
	
	// Smooth Scrolling
	$('a[href*="#"]:not([href="#"])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
	    $('html, body').animate({
	      scrollTop: target.offset().top
	    }, 300);
	    return false;
	  }
	}
	});
	
	// MENU
	let b1 = $("#homeclicker");
	let b2 = $("#aboutclicker");
	let b3 = $("#contactclicker");
	let b4 = $("#afflclicker");

	b1.click(function(){
		$('#homeli').addClass('activee');
		$('#aboutli').removeClass('activee');
		$('#contli').removeClass('activee');
		$('#affli').removeClass('activee');
	});

	b2.click(function(){
		$('#aboutli').addClass('activee');
		$('#homeli').removeClass('activee');
		$('#contli').removeClass('activee');
		$('#affli').removeClass('activee');
	});

	b3.click(function(){
		$('#contli').addClass('activee');
		$('#aboutli').removeClass('activee');
		$('#homeli').removeClass('activee');
		$('#affli').removeClass('activee');
	});

	b4.click(function(){
		$('#affli').addClass('activee');
		$('#contli').removeClass('activee');
		$('#aboutli').removeClass('activee');
		$('#homeli').removeClass('activee');
	});

	let btnTop = $('#moveeup');

	$(window).scroll(function(){
		if ($(window).scrollTop() > 400) {
			btnTop.addClass('show');
		}
		else{
			btnTop.removeClass('show');
		}
	});

	btnTop.on('click', function(e) {
  		e.preventDefault();
  		$('html, body').animate({scrollTop:0}, '300');
	});

});