'use strict';

var dependencias = ['angular'];

var crearModulo = function (angular) {
	var dependencias = [ 'menuCtrl', 'cajaCtrl', 'movimientosFactory','angular_ui_router'];
	var iniciarModulo = function (menuCtrl, cajaCtrl, movimientosFactory) {
		angular
			.module('controlCajaApp', ['ui.router'])
			.config(function ($stateProvider) {
				$stateProvider
					.state('total', {
						url: '/',
						controller: 'CajaCtrl as caja',
						templateUrl: 'total.html'
					})
					.state('nuevo', {
						url: '/nuevo',
						controller: 'CajaCtrl as caja',
						templateUrl: 'nuevo.html'
					})
					.state('lista', {
						url: '/lista',
						controller: 'CajaCtrl as caja',
						templateUrl: 'lista.html'
					}).state('not-found', {
						url: '*path',
						templateUrl: 'not-found.html'
					});
			})
			.controller('MenuCtrl', menuCtrl)
			.controller('CajaCtrl', cajaCtrl)
			.factory('movimientosFactory', movimientosFactory);
		angular.bootstrap(document, ['controlCajaApp']);
	};
	require(dependencias, iniciarModulo);
};
require(dependencias, crearModulo);


