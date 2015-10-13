require.config({
	baseUrl: "/06b-require/",
	paths: {
		'angular': 'angular.min',
		'angular_ui_router': 'angular-ui-router.min'
	},
	shim: {
		'angular': {
			exports: 'angular'
		},
		'angular_ui_router':{
            deps: ['angular']
        }
	},
	deps: ['app']
});

