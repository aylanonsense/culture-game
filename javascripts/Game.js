define([
	'util/EventHelper',
	'actor/Actor',
	'mind/occurrence/Attack',
	'mind/occurrence/Conversation',
	'geography/Map'
], function(
	EventHelper,
	Actor,
	Attack,
	Conversation,
	Map
) {
	function Game() {
		this._events = new EventHelper([ 'output' ]);
	}
	Game.prototype.start = function() {
		var melissa = new Actor({ name: 'Melissa' });
		var antoinette = new Actor({ name: 'Antoinette' });
		var persephone = new Actor({ name: 'Persephone' });

		//an attack!!
		var memory = antoinette.handleOccurrence(new Attack({
			attacker: melissa,
			defender: antoinette
		}));

		//the gossip!!
		persephone.handleOccurrence(new Conversation({
			speaker: antoinette,
			listener: persephone,
			subjects: [ memory ]
		}));

		this.output('antoinette');
		this.output(antoinette.mind.toString());
		this.output('\npersephone');
		this.output(persephone.mind.toString());
		this.output('Colors: ' +
			'<white>white</white> ' +
			'<black>black</black> ' +
			'<gray>gray</gray> ' +
			'<darkgray>darkgray</darkgray> ' +
			'<blue>blue</blue> ' +
			'<darkblue>darkblue</darkblue> ' +
			'<green>green</green> ' +
			'<darkgreen>darkgreen</darkgreen> ' +
			'<teal>teal</teal> ' +
			'<darkteal>darkteal</darkteal> ' +
			'<red>red</red> ' +
			'<darkred>darkred</darkred> ' +
			'<pink>pink</pink> ' +
			'<darkpink>darkpink</darkpink> ' +
			'<yellow>yellow</yellow> ' +
			'<darkyellow>darkyellow</darkyellow>');

		var map = new Map();
		this.output('');
		this.output(map.toString());
	};
	Game.prototype.evaluateInput = function(txt) {
		this.output(txt);
	};
	Game.prototype.output = function(txt) {
		this._events.trigger('output', txt);
	};
	Game.prototype.on = function(eventName, callback, ctx) {
		this._events.on.apply(this._events, arguments);
	};
	return Game;
});