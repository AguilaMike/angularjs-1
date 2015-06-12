'use strict';

var dependencias =['angular'];

var crear = function (angular) {
	var dependencias = ['cajaCtrl'];
	var iniciar = function (cajaCtrl) {
		angular
			.module('controlCajaApp', [])
			.controller('CajaCtrl', cajaCtrl);
		angular.bootstrap(document, ['controlCajaApp']);
	};
	require(dependencias, iniciar);
};

require(dependencias,crear);
