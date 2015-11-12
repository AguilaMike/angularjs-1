(function () {

	angular.module('lista')
		.directive('filaMovimiento', filaMovimiento);


	function filaMovimiento() {
		return {
			restrict: 'A',
			templateUrl: './app/states/lista/fila-movimiento/fila-movimiento.html',
			scope: {
				movimiento: "="
			}
		};
	}


}());