require.config({
	baseUrl: "/03b-require/",
	paths: {
		'angular': 'angular.min'
	},
	shim: {
		'angular': {
			exports: 'angular'
		}
	},
	deps: ['app']
});

