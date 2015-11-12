(function () {
	angular.module('cashFlow').service('maestrosService', maestrosService);

	// el servicio $resource viene en el módulo ngResource
	function maestrosService($resource) {

		// dejamos de devolver promesas
		//this.categoriasPromise = $http.get('/api/pub/maestros');

		// y devolvemos recursos...
		// que pueden ser consumidos con sintaxis síncrona
		// El uso de recursos simplifica mucho la sintaxis
		return $resource("/api/pub/maestros/");
	}
}());