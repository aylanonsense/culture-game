define([
	'geography/feature/Feature',
	'util/extend'
], function(
	Feature,
	extend
) {
	function Lake(params) {
		Feature.call(this, extend(params, {
			color: 'blue',
			icon: 'L'
		}));
	}
	Lake.prototype = Object.create(Feature.prototype);
	return Lake;
});