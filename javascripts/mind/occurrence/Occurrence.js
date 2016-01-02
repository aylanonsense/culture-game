define(function() {
	function Occurrence(params) {
		this.occurrenceType = params.occurrenceType;
		this.mind = params.mind || null;
		this.parentMemory = params.parentMemory || null;
		this.certainty = (params.certainty || params.certainty === 0 ? params.certainty : null);
		this.occurrence = params.occurrence || null;
	}
	Occurrence.prototype.clone = function() {
		throw new Error('To be implemented by subclasses');
	};
	Occurrence.prototype.unpackMemory = function() {
		throw new Error('To be implemented by subclasses');
	};
	Occurrence.prototype.cloneMemory = function(mind, parentMemory) {
		var memory = this.clone();
		memory.mind = mind;
		memory.parentMemory = parentMemory;
		memory.occurrence = (this.isMemory() ? this.occurrence : this);
		return memory;
	};
	Occurrence.prototype.isMemory = function() {
		return this.occurrence !== null;
	};
	Occurrence.prototype.toString = function() {
		return (this.isMemory() ? '[Memory ' : '[Occurrence ') + this.occurrenceType + ']';
	};
	return Occurrence;
});