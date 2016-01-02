define([
	'geography/feature/Beach',
	'geography/feature/Desert',
	'geography/feature/Forest',
	'geography/feature/Lake',
	'geography/feature/Mountain',
	'geography/feature/River',
	'geography/feature/Sea'
], function(
	Beach,
	Desert,
	Forest,
	Lake,
	Mountain,
	River,
	Sea
) {
	function Map() {
		this.width = 28;
		this.height = 28;
		this._string = '';
		this.features = [];
		this.featureLookup = [];
		for(var r = 0; r < this.height; r++) {
			var row = [];
			for(var c = 0; c < this.width; c++) {
				row.push(null);
			}
			this.featureLookup.push(row);
		}

		// Tundra
		// Arctic
		// Prairie
		// Savanna

		//deserts
		this.addFeature(new Desert({ points: [
			7,5,
			8,5, 8,6, 8,7, 8,8,
			9,6, 9,7, 9,8, 9,9,
			10,6, 10,7, 10,8, 10,9, 10,10,
			11,7, 11,8, 11,9, 11,10, 11,11,
			12,7, 12,8, 12,9, 12,10,
			13,6, 13,7, 13,8, 13,9, 13,10,
			14,6, 14,7, 14,8, 14,9,
			15,7, 15,8
		] }));

		// Swamp

		//mountains
		this.addFeature(new Mountain({ points: [
			5,4, 5,5, 5,6, 5,7, 5,8,
			6,3, 6,4, 6,5, 6,6, 6,7, 6,8, 6,9, 6,10,
			7,6, 7,7, 7,8, 7,9, 7,10, 7,11, 7,12, 7,13,
			8,9, 8,10, 8,11, 8,12, 8,13, 8,14,
			9,10, 9,11, 9,12, 9,13, 9,14, 9,15,
			10,11, 10,12, 10,13, 10,14,
			11,12, 11,13,
			12,12,
			13,12, 13,13,
			14,13, 14,14, 14,15,
			15,14, 15,15, 15,16,
			16,15, 16,16, 16,17,
			17,14, 17,15, 17,16, 17,17,
			18,14, 18,15, 18,16, 18,17, 18,18,
			19,14, 19,15, 19,16, 19,17,
			20,13, 20,14, 20,15, 20,16,
			21,13, 21,14, 21,15,
			22,14, 22,15,
			23,15
		] }));
		this.addFeature(new Mountain({ points: [
			0,6, 0,7, 0,10, 0,11, 0,12, 0,13, 0,14, 0,15, 0,16, 0,17, 0,18, 0,19, 0,20,
			1,13, 1,14, 1,15, 1,16, 1,17, 1,18, 1,19, 1,20, 1,21,
			2,16, 2,17, 2,18, 2,19, 2,20, 2,21,
			3,18, 3,19, 3,20
		] }));

		//rivers
		this.addFeature(new River({ points: [
			12,11, 13,11, 14,11, 14,10, 15,10, 15,9, 16,9, 16,8, 16,7, 16,6, 15,6, 15,5, 15,4,
			17,8, 18,8, 19,8, 19,7, 20,7, 21,7
		]}));

		//lakes
		this.addFeature(new Lake({ points: [
			22,7, 22,8,
			23,7, 23,8, 23,9,
			24,7, 24,8, 24,9,
			25,8, 25,9
		]}));

		// Volcano
		// Rainforest
		// Forest
		// Freshwater

		//seas
		var seaPoints = [];
		for(var i = 0; i < this.height; i++) {
			seaPoints = seaPoints.concat([ i,0, i,1, i,2 ]);
		}
		seaPoints = seaPoints.concat([
			0,3, 0,4, 1,3, 7,3, 8,3, 9,3, 9,4, 10,3, 10,4, 11,3, 11,4, 11,5, 12,3,
			12,4, 12,5, 13,3, 13,4, 14,3, 14,4, 15,3, 16,3, 17,3, 18,3, 19,3, 23,3
		]);
		this.addFeature(new Sea({ points: seaPoints }));
		seaPoints = []
		for(i = 0; i < this.height; i++) {
			seaPoints = seaPoints.concat([ i,27, i,26 ]);
		}
		seaPoints = seaPoints.concat([
			0,25, 0,24, 1,25, 2,25, 3,25, 21,25, 22,25, 23,24, 23,25,
			24,21, 24,22, 24,23, 24,24, 24,25,
			25,20, 25,21, 25,22, 25,23, 25,24, 25,25,
			26,19, 26,20, 26,21, 26,22, 26,23, 26,24, 26,25,
			27,19, 27,20, 27,21, 27,22, 27,23, 27,24, 27,25
		]);
		this.addFeature(new Sea({ points: seaPoints }));

		// Coral reef

		this._recalculateToString();
	}
	Map.prototype.addFeature = function(feature) {
		this.features.push(feature);
		for(var r = 0; r < this.height; r++) {
			for(var c = 0; c < this.width; c++) {
				if(feature.isIn(r, c)) {
					this.featureLookup[r][c] = feature;
				}
			}
		}
	};
	Map.prototype._recalculateToString = function() {
		var map = [];
		for(var r = 0; r < this.height; r++) {
			var row = [];
			for(var c = 0; c < this.width; c++) {
				var s = '';
				if(this.featureLookup[r][c]) {
					var color = this.featureLookup[r][c].getColor(r, c);
					var icon = this.featureLookup[r][c].getIcon(r, c);
					s += '<' + color + '>' + icon + '</' + color + '>';
				}
				else {
					s = '-';//(c + 2 * r) % 4 == 2 ? ((c + r) % 7 === 0 ? ',' : '.') : ' ';
				}
				row.push(s);
			}
			map.push(row);
		}
		for(i = 0; i < map.length; i++) {
			map[i] = map[i].join(' ');
		}
		this._string = '<darkgray>' + map.join('\n') + '</darkgray>';
	};
	Map.prototype.toString = function() {
		return this._string;
	};
	return Map;
});