(function () {
	angular.module('abMenuNavegacion', [])
		.directive('abMenuNavegacion', menuNavegacion);
		
	function menuNavegacion() {
		return {
			templateUrl: './app/components/menuNavegacion/tpl-menu-navegacion.html',
			controller: "MenuCtrl as menu"
		};
	}
		
	}());	