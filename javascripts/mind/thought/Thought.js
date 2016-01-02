define([
	'mind/algorithm/calculateTotalCertainty'
], function(
	calculateTotalCertainty
) {
	function Thought(params) {
		this.thoughtType = params.thoughtType;
		this.mind = params.memory.mind;
		this.certainty = 0;
		this.supportingMemories = [];
		this.addSupportingMemory(params);
	}
	Thought.prototype.canCombineWith = function(thought) {
		throw new Error('To be implemented by subclasses');
	};
	Thought.prototype.addSupportingMemory = function(params) {
		var memory = {
			memory: params.memory,
			certainty: params.certainty
		};
		this.supportingMemories.push(memory);
		this.calculateStats();
		return memory;
	};
	Thought.prototype.combine = function(thought) {
		if(this.canCombineWith(thought)) {
			this.supportingMemories.concat(thought.supportingMemories);
			return true;
		}
		else {
			return false;
		}
	};
	Thought.prototype.toString = function() {
		return '[Thought ' + this.thoughtType + ']';
	};
	Thought.prototype.calculateStats = function() {
		this.certainty = calculateTotalCertainty(this.supportingMemories);
	};
	return Thought;
});