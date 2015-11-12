(function () {
	angular.module('cashFlow').factory('movimientosFactory', movimientosFactory);

	function movimientosFactory($http)  {

		var result  =   {};
	
		result.gettingMovimientos =   function ()  {
			return $http.get('api/priv/movimientos');
		};

		result.gettingTotal =   function ()  {
			return $http.get('api/priv/total');
		};

		result.postingMovimiento =   function (movimiento)  {
			return $http.post('api/priv/movimientos', movimiento);
		};

		return result;
	};

}());
