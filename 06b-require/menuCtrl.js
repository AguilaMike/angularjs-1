'use strict';
var dependencias = ['angular'];

var crear = function (angular) {
	var menuCtrl = function ($state) {
        this.isActive = function (estado) {
			return $state.is(estado);
        }
    };
	return ['$state',menuCtrl];
}

define(dependencias, crear);

