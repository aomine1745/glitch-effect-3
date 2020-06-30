$(function glitchEffects () {
	$glitch = $('<div class="glitch"></div>')
	const x = Math.random() * 200
	const y = Math.random() * 200

	$glitch.css({
		'left': x + 'px',
		'top': y + 'px'
	}).appendTo('section').fadeOut(200, function () {
		$(this).remove()
		glitchEffects()
	})
})()