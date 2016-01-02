define([
	'geography/feature/Feature',
	'util/extend'
], function(
	Feature,
	extend
) {
	function Sea(params) {
		Feature.call(this, extend(params, {
			color: 'blue',
			icon: '~'
		}));
	}
	Sea.prototype = Object.create(Feature.prototype);
	return Sea;
});