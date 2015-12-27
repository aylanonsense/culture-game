//configure requirejs
requirejs.config({
	baseUrl: 'javascripts',
	paths: {
        async: '/require/plugin/async',
        font: '/require/plugin/font',
        goog: '/require/plugin/goog',
        image: '/require/plugin/image',
        json: '/require/plugin/json',
        noext: '/require/plugin/noext',
        mdown: '/require/plugin/mdown',
        text: '/require/plugin/text',
		jquery: '/jquery'
	}
});

//execute the main class
requirejs([ 'main' ], function(main) {
	main();
});