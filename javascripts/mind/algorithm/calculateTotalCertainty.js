define(function() {
	return function calculateTotalCertainty(values) {
		var positiveCertainty = 0, negativeCertainty = 0;
		for(var i = 0; i < values.length; i++) {
			if(values[i].certainty > 0) {
				positiveCertainty += (1 - positiveCertainty) * values[i].certainty * 0.8;
			}
			else {
				negativeCertainty += (1 - negativeCertainty) * -values[i].certainty * 0.8;
			}
		}
		if(positiveCertainty < negativeCertainty) {
			positiveCertainty *= positiveCertainty / negativeCertainty;
		}
		else if(positiveCertainty > negativeCertainty) {
			negativeCertainty *= negativeCertainty / positiveCertainty;
		}
		return positiveCertainty - negativeCertainty;
	};
});