define([
	'mind/thought/Thought',
	'util/extend'
], function(
	Thought,
	extend
) {
	function ActorIs(params) {
		Thought.call(this, extend(params, {
			thoughtType: 'ActorIs'
		}));
		this.actor = params.actor;
		this.adjective = params.adjective;
	}
	ActorIs.prototype = Object.create(Thought.prototype);
	ActorIs.prototype.canCombineWith = function(thought) {
		return this.thoughtType === thought.thoughtType &&
			this.actor.sameAs(thought.actor) &&
			this.adjective === thought.adjective;
	};
	ActorIs.prototype.toString = function() {
		return this.actor.name + ' is ' + this.adjective;
	};
	return ActorIs;
});