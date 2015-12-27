define([
	'mind/Mind'
], function(
	Mind
) {
	var NEXT_ACTOR_ID = 0;
	function Actor(params) {
		this.actorId = NEXT_ACTOR_ID++;
		this.name = params.name;
		this.mind = new Mind({ actor: this });
	}
	Actor.prototype.sameAs = function(actor) {
		return actor && this.actorId === actor.actorId;
	};
	Actor.prototype.handleOccurrence = function(occurrence) {
		return this.mind.learnOccurrence(occurrence);
	};
	Actor.prototype.toString = function() {
		return this.name;
	};
	return Actor;
});