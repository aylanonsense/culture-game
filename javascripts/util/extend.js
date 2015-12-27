define(function() {
	return function extend(obj /*, higherPriorityObjects, ... */) {
		obj = obj || {};
		for(var i = 1; i < arguments.length; i++) {
			for(var key in arguments[i]) {
				obj[key] = arguments[i][key];
			}
		}
		return obj;
	};
});