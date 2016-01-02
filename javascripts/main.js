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

		var replacements = {
			'<white>': '<span class="white">', '</white>': '</span>',
			'<black>': '<span class="black">', '</black>': '</span>',
			'<gray>': '<span class="gray">', '</gray>': '</span>',
			'<darkgray>': '<span class="darkgray">', '</darkgray>': '</span>',
			'<blue>': '<span class="blue">', '</blue>': '</span>',
			'<darkblue>': '<span class="darkblue">', '</darkblue>': '</span>',
			'<green>': '<span class="green">', '</green>': '</span>',
			'<darkgreen>': '<span class="darkgreen">', '</darkgreen>': '</span>',
			'<teal>': '<span class="teal">', '</teal>': '</span>',
			'<darkteal>': '<span class="darkteal">', '</darkteal>': '</span>',
			'<red>': '<span class="red">', '</red>': '</span>',
			'<darkred>': '<span class="darkred">', '</darkred>': '</span>',
			'<pink>': '<span class="pink">', '</pink>': '</span>',
			'<darkpink>': '<span class="darkpink">', '</darkpink>': '</span>',
			'<yellow>': '<span class="yellow">', '</yellow>': '</span>',
			'<darkyellow>': '<span class="darkyellow">', '</darkyellow>': '</span>'
		}
		function render(txt) {
			if(!txt || txt === '') {
				txt = ' ';
			}
			for(var k in replacements) {
				txt = txt.replace(new RegExp(k, 'g'), replacements[k]);
			}
			$('<pre></pre>').html(txt).appendTo($output);
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