(function () {
	//cambios en las rutas relativas de las vistas

	angular.module('abComponentes', [])
		.directive('abPiePagina', piePagina)
		.directive('abContenido', contenido);

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

	
}());