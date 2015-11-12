(function () {

	angular.module('cashFlow').config(configuradorInterceptores);

	function configuradorInterceptores($httpProvider) {
		/** la configuración de $http sirve para $resource */
		$httpProvider.interceptors.push(funcionInterceptoraSeguridad);
	}


	function funcionInterceptoraSeguridad($injector, $q, $cookies, $rootScope) {

		var interceptor = {}; 

		interceptor.request = function (request) {
			request.headers["sessionId"] = $cookies.get("sessionId");
			return request;
		};

		interceptor.responseError = function (response) {
			var state = $injector.get('$state');
			if (response.status === 401) {
				$rootScope.mensaje = "No hay derecho!!!";
				state.go('registro');
			} else if (response.status === 419) {
				$rootScope.mensaje = "Estoy caduco!!!";
				$cookies.remove("sessionId")
				state.go('registro');
			};
			return $q.reject(response);
		}

		return interceptor;
	}


}());
