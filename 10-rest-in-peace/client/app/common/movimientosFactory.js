(function () {
	angular.module('cashFlow').factory('movimientosFactory', movimientosFactory);

	function movimientosFactory($http)  {

		var result  =   {};
		/*
		ya no almacenamos ni los movimientos ni los totales en local
		var movimientos = [];
		var total = {
			ingresos: 0,
			gastos: 0
		};
		result.getMovimientos =   function ()  {
			return movimientos;
		};
		result.getTotal =   function ()  {
			return total;
		};

		result.postMovimiento =   function (movimiento)  {
			movimientos.push(movimiento);
			total.ingresos += movimiento.esIngreso * movimiento.importe;
			total.gastos += movimiento.esGasto * movimiento.importe;
		};
		*/

		// se produce un cambio en la nomenclatura
		// al usar el gerundio indicamos un proceso no terminado
		// el controlador que lo consuma debe manejar la promesa
		result.gettingMovimientos =   function ()  {
			// Estamos devolviendo promesas, no objetos
			return $http.get('api/priv/movimientos');
		};

		result.gettingTotal =   function ()  {
			return $http.get('api/priv/total');
		};

		result.postingMovimiento =   function (movimiento)  {
			return $http.post('api/priv/movimientos', movimiento);
		};


		//La poca lógica de negocio se irá al lado del servidor... aunque por ahora vuelve al controller
		/*
		result.balance = function () {
			return total.ingresos - total.gastos
		}

		result.tipo = function (movimiento) {
			return movimiento.esIngreso && 'Ingreso' || 'Gasto'
		}
		*/

		return result;
	};

}());
