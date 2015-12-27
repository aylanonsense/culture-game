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
	};
	Mind.prototype.addThought = function(thought) {
		this.thoughts.push(thought);
		return thought;
	};
	/*Mind.prototype.learnOccurrence = function(occurrence) {
		//create a local memory of the occurrence
		var memory = occurrence.createMemory();
		this.memories.push(memory);

		//use that memory to create, support, or challenge thoughts
		var thoughts = memory.createThoughts();
		for(var i = 0; i < thoughts.length; i++) {
			var isNewThought = true;
			for(var j = 0; j < this.thoughts.length; j++) {
				//try to combine the new thought with an existing thought
				if(this.thoughts[j].combine(thoughts[i])) {
					isNewThought = false;
					break;
				}
			}
			if(isNewThought) {
				this.thoughts.push(thoughts[i]);
			}
		}

		//TODO opinions
	};*/
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