(function () {
	angular.module('abMenuNavegacion', [])
		.directive('abMenuNavegacion', menuNavegacion);
		
	function menuNavegacion() {
		return {
			templateUrl: './app/components/menuNavegacion/menu-navegacion.html',
			controller: "MenuCtrl as menu"
		};
	}
		
	}());	