define([
	'geography/feature/Feature',
	'util/extend'
], function(
	Feature,
	extend
) {
	function Desert(params) {
		Feature.call(this, extend(params, {
			color: 'yellow',
			icon: '.'
		}));
	}
	Desert.prototype = Object.create(Feature.prototype);
	return Desert;
});