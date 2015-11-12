// SÓLO PARA LOS ESTADOS NO CONTROLADOS.
// los demás se autogestionan en cada componente
angular.module('cashFlow').config(function ($stateProvider) {
	$stateProvider
		.state('not-found', {
			url: '*path',
			templateUrl: './app/states/not-found.html'
		});
});