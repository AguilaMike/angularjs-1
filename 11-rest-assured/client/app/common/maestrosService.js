(function () {
	angular.module('cashFlow').service('maestrosService', maestrosService);

	function maestrosService($http) {

		this.categoriasPromise = $http.get('/api/pub/maestros');

	}
}());