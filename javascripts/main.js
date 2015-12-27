define([
	'jquery',
	'Game'
], function(
	$,
	Game
) {
	return function() {
		var game = new Game();
		var $input = $('#input-area input').focus();
		var $output = $('#output-area');

		function render(txt) {
			$('<pre></pre>').text(txt).appendTo($output);
			$output.scrollTop($output[0].scrollHeight);
		}

		game.on('output', render);

		$input.on('keydown', function(evt) {
			if(evt.which === 13) { //Enter key
				var txt = $input.val();
				$input.val('');
				render('> ' + txt);
				game.evaluateInput(txt);
			}
		});

		game.start();
	};
});