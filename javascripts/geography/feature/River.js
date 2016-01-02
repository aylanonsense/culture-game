define([
	'geography/feature/Feature',
	'util/extend'
], function(
	Feature,
	extend
) {
	function River(params) {
		Feature.call(this, extend(params, {
			color: 'teal',
			icon: '~'
		}));
	}
	River.prototype = Object.create(Feature.prototype);
	return River;
});