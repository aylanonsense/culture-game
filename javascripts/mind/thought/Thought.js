define(function() {
	function Thought(params) {
		this.thoughtType = params.thoughtType;
		this.memory = params.memory;
		this.mind = this.memory.mind;
		this.supportingMemories = [ { memory: params.memory } ];
	}
	Thought.prototype.canCombineWith = function(thought) {
		throw new Error('To be implemented by subclasses');
	};
	Thought.prototype.combine = function(thought) {
		if(this.canCombineWith(thought)) {
			for(var i = 0; i < thought.supportingMemories.length; i++) {
				this.supportingMemories.push({
					memory: thought.supportingMemories[i].memory
				});
			}
			return true;
		}
		else {
			return false;
		}
	};
	Thought.prototype.toString = function() {
		return '[Thought ' + this.thoughtType + ']';
	};
	return Thought;
});