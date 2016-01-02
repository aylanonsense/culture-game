define([
	'geography/feature/Feature',
	'util/extend'
], function(
	Feature,
	extend
) {
	function Forest(params) {
		Feature.call(this, extend(params, {
			color: 'green',
			icon: 'T'
		}));
	}
	Forest.prototype = Object.create(Feature.prototype);
	return Forest;
});