(function () {
	//cambios en las rutas relativas de las vistas

	angular.module('abComponentes', [])
		.directive('abPiePagina', piePagina)
		.directive('abContenido', contenido)
		.directive('abCabecera', cabecera)
		.directive('abFilaMovimiento', filaMovimiento);

	function piePagina() {
		return {
			template: '<footer class="container"><hr/><p class="text-center">Desarrollado con AngularJS by Google. Por Alberto Basalo - <a href="http://agorabinaria.com">Ágora Binaria SL</a></p></footer>'
		};
	};

	function contenido() {
		return {
			template: '<div class="container text-center" style="padding-top:60px;" ui-view></div>'
		};
	};

	function cabecera() {
		return {
			transclude: true,
			templateUrl: './app/components/tpl-cabecera.html'
		};
	};

	function filaMovimiento() {
		return {
			restrict: 'A',
			templateUrl: './app/components/tpl-fila-movimiento.html',
			scope: {
				movimiento: "="
			}
		};
	}


}());