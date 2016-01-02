define(function() {
	function Mind(params) {
		this.actor = params.actor;
		this.memories = [];
		this.thoughts = [];
	}
	Mind.prototype.learnOccurrence = function(occurrence) {
		var memory = occurrence.cloneMemory(this);
		this.addMemory(memory);
		return memory;
	};
	Mind.prototype.addMemory = function(memory) {
		this.memories.push(memory);
		memory.unpackMemory();
		return memory;
	};
	Mind.prototype.addThought = function(thought) {
		//try to combine the new thought with an existing thought
		for(var i = 0; i < this.thoughts.length; i++) {
			if(this.thoughts[i].combine(thought)) {
				return thought;
			}
		}

		//otherwise just add it as a new, novel thought
		this.thoughts.push(thought);
		return thought;
	};
	Mind.prototype.calculateActorTrustworthiness = function(actor) {
		return 0.5;
	};
	Mind.prototype.toString = function() {
		var i, s = 'Memories:';
		for(i = 0; i < this.memories.length; i++) {
			s += '\n  ' + this.memories[i].toString();
		}
		s += '\nThoughts:';
		for(i = 0; i < this.thoughts.length; i++) {
			s += '\n  ' + this.thoughts[i].toString();
		}
		return s;
	};
	return Mind;
});