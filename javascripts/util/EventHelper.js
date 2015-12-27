define(function() {
	function EventHelper(eventNames) {
		this._eventCallbacks = {};
		if(eventNames) {
			for(var i = 0; i < eventNames.length; i++) {
				this._eventCallbacks[eventNames[i]] = [];
			}
		}
	}
	EventHelper.prototype.trigger = function(eventName, data /*, additionalData */) {
		if(!this._eventCallbacks[eventName]) {
			throw new Error("Event '" + eventName + "' is not registered");
		}

		//event may be triggered with multiple arguments -- put that together
		var args;
		if(arguments.length <= 2) {
			args = [ data ];
		}
		else {
			args = Array.prototype.slice.call(arguments);
			args.shift(); //ignore first argument (eventName)
		}

		//trigger event
		for(var i = 0; i < this._eventCallbacks[eventName].length; i++) {
			this._eventCallbacks[eventName][i].apply(this, args);
		}
	};
	EventHelper.prototype.on = function(eventName, callback, ctx) {
		if(!this._eventCallbacks[eventName]) {
			throw new Error("Event '" + eventName + "' is not registered");
		}
		if(ctx) {
			this._eventCallbacks[eventName].push(callback.bind(ctx));
		}
		else {
			this._eventCallbacks[eventName].push(callback);
		}
	};
	return EventHelper;
});