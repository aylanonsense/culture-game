define([
	'util/EventHelper',
	'actor/Actor',
	'mind/occurrence/Attack',
	'mind/occurrence/Conversation'
], function(
	EventHelper,
	Actor,
	Attack,
	Conversation
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

		this._output('antoinette');
		this._output(antoinette.mind.toString());
		this._output('\npersephone');
		this._output(persephone.mind.toString());
	};
	Game.prototype.evaluateInput = function(txt) {
		this._output(txt);
	};
	Game.prototype._output = function(txt) {
		this._events.trigger('output', txt);
	};
	Game.prototype.on = function(eventName, callback, ctx) {
		this._events.on.apply(this._events, arguments);
	};
	return Game;
});