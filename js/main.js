$(document).ready(function() {
	var beep = new Audio('pop_drip.wav');

	$(document).on('click', '.checkbox', function() {
		$(this).toggleClass('checked');
		beep.play();
	})

	$(document).on('click', '.token.container', function() {
		$('.token.container .img').addClass('ready');
	})
})