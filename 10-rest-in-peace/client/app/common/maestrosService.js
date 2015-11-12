(function () {
	angular.module('cashFlow').service('maestrosService', maestrosService);

	// incluyo una dependencia al servicio $http
	// es un servicio que viene en 'ng' , el módulo core de angular
	function maestrosService($http) {
		/*
		Ya no usamos datos hard coded
		this.categorias = {
			categoriasIngresos: ['Nómina', 'Ventas', 'Intereses Depósitos'],
			categoriasGastos: ['Hipotéca', 'Compras', 'Impuestos']
		};
		*/

		// Los maestros se descargarán desde un servidor http
		this.categoriasPromise = $http.get('/api/pub/maestros');

	}
}());