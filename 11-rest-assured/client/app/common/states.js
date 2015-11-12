//incluye el nuevo estado: registro
angular.module('cashFlow').config(function ($stateProvider) {
	$stateProvider
		.state('total', {
			url: '/',
			controller: 'CajaCtrl as caja',
			templateUrl: './app/states/total.html'
		})
		.state('nuevo', {
			url: '/nuevo',
			controller: 'CajaCtrl as caja',
			templateUrl: './app/states/nuevo.html'
		})
		.state('lista', {
			url: '/lista',
			controller: 'CajaCtrl as caja',
			templateUrl: './app/states/lista.html'
		})
		.state('registro', {
			url: '/registro',
			controller: 'RegistroCtrl as registro',
			templateUrl: './app/states/registro/registro.html'
		})
		.state('not-found', {
			url: '*path',
			templateUrl: './app/states/not-found.html'
		});
});