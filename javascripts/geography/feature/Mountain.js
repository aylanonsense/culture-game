define([
	'geography/feature/Feature',
	'util/extend'
], function(
	Feature,
	extend
) {
	function Mountain(params) {
		Feature.call(this, extend(params, {
			color: 'red',
			icon: 'M'
		}));
	}
	Mountain.prototype = Object.create(Feature.prototype);
	return Mountain;
});