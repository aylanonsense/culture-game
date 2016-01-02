define([
	'geography/feature/Feature',
	'util/extend'
], function(
	Feature,
	extend
) {
	function Beach(params) {
		Feature.call(this, extend(params, {
			color: 'yellow',
			icon: '~'
		}));
	}
	Beach.prototype = Object.create(Feature.prototype);
	return Beach;
});