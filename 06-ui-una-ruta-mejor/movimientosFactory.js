(function () {

	angular.module('cashFlow').factory('movimientosFactory', movimientosFactory);

	function movimientosFactory()  {

		var movimientos = [];

		var total = {
			ingresos: 0,
			gastos: 0
		};

		var result  =   {};


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

		result.balance = function () {
			return total.ingresos - total.gastos
		}

		result.tipo = function (movimiento) {
			return movimiento.esIngreso && 'Ingreso' || 'Gasto'
		}


		return result;
	};

}());
