define([
	'mind/occurrence/Occurrence',
	'util/extend',
	'mind/thought/ActorIs'
], function(
	Occurrence,
	extend,
	ActorIs
) {
	function Attack(params) {
		Occurrence.call(this, extend(params, {
			occurrenceType: 'Attack'
		}));
		this.attacker = params.attacker || null;
		this.defender = params.defender || null;
	}
	Attack.prototype = Object.create(Occurrence.prototype);
	Attack.prototype.clone = function() {
		return new Attack({
			attacker: this.attacker,
			defender: this.defender
		});
	};
	Attack.prototype.unpackMemory = function() {
		//if I'm the attacker...
		if(this.mind.actor.sameAs(this.attacker)) {
			//TODO
		}

		//if I'm the defender...
		//if I'm not involved...
		else {
			//TODO
			if(this.attacker) {
				this.mind.addThought(new ActorIs({
					memory: this,
					actor: this.attacker,
					adjective: 'aggressive'
				}));
			}
		}
	};
	Attack.prototype.toString = function() {
		return this.attacker + ' attacked ' + this.defender;
	};
	return Attack;
});