(function () {
	angular.module('cashFlow').factory('movimientosFactory', movimientosFactory);

	function movimientosFactory($resource)  {

		var result  =   {};

		/*
		result.gettingMovimientos =   function ()  {
			return $http.get('api/priv/movimientos');
		};

		result.gettingTotal =   function ()  {
			return $http.get('api/priv/total');
		};

		result.postingMovimiento =   function (movimiento)  {
			return $http.post('api/priv/movimientos', movimiento);
		};
		*/


		// Estamos devolviendo recursos, que internamente usan promesas
		result.movimientos =  $resource("/api/priv/movimientos/");
		result.total =  $resource("/api/priv/total/");

		return result;
	};

}());
