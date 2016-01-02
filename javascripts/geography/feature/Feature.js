define(function() {
	function Feature(params) {
		this.points = params.points;
		this._icon = params.icon || 'x';
		this._color = params.color || 'pink';
	}
	Feature.prototype.isIn = function(r, c) {
		for(var i = 0; i < this.points.length; i += 2) {
			if(this.points[i] === r && this.points[i + 1] === c) {
				return true;
			}
		}
		return false;
	};
	Feature.prototype.getIcon = function(r, c) {
		return this._icon;
	};
	Feature.prototype.getColor = function(r, c) {
		return this._color;
	};
	return Feature;
});