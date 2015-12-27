define([
	'mind/occurrence/Occurrence',
	'util/extend'
], function(
	Occurrence,
	extend
) {
	function Conversation(params) {
		Occurrence.call(this, extend(params, {
			occurrenceType: 'Conversation'
		}));
		this.speaker = params.speaker || null;
		this.listener = params.listener || null;
		this.subjects = params.subjects;
	}
	Conversation.prototype = Object.create(Occurrence.prototype);
	Conversation.prototype.clone = function() {
		return new Conversation({
			speaker: this.speaker,
			listener: this.listener,
			subjects: this.subjects
		});
	};
	Conversation.prototype.unpackMemory = function() {
		//if I'm the one doing the talking, I don't have much to unpack
		if(this.mind.actor.sameAs(this.speaker)) {
			return;
		}

		//if I'm the listener, I can gain memories through them and think about my relationship with the speaker
		//if I'm not involved, I can think about the two actors talking and still gain memories from them
		else {
			var trust = '2nd-hand-unreliable';
			for(var i = 0; i < this.subjects.length; i++) {
				this.mind.addMemory(this.subjects[i].cloneMemory(this.mind, this));
			}
		}
	};
	Conversation.prototype.toString = function() {
		return this.speaker + ' spoke to ' + this.listener;
	};
	return Conversation;
});