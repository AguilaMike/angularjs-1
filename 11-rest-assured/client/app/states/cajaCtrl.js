(function () {
	/*
	Las llamadas rutas protegidas devolverán un error si el usuario no está autenticado
	 */
	var cajaCtrl = function (movimientosFactory, maestrosService) {
		var vm = this;

		vm.titulo = "Controla tu Cash Flow";

		maestrosService.categoriasPromise
			.success(function (result) {
				vm.maestros = result;
			});


		vm.nuevoMovimiento = {
			esIngreso: 1,
			esGasto: 0,
			importe: 0,
			fecha: new Date()
		};


		vm.movimientos = [];
		vm.total = {
			ingresos: 0,
			gastos: 0
		};
		
		movimientosFactory.gettingMovimientos()
			.success(function (movimientos) {
				vm.movimientos = movimientos;
			});

		movimientosFactory.gettingTotal()
			.success(function (total) {
				vm.total = total;
			});


		vm.guardarMovimiento = function () {
			vm.nuevoMovimiento.tipo = vm.tipo(vm.nuevoMovimiento);
			movimientosFactory.postingMovimiento(vm.nuevoMovimiento)
				.success(function (postedData) {
					movimientosFactory.gettingMovimientos()
						.success(function (movimientos) {
							vm.movimientos = movimientos;
						});
					movimientosFactory.gettingTotal()
						.success(function (total) {
							vm.total = total;
						});
					vm.nuevoMovimiento.importe = 0;
				});
		}

		vm.balance = function () {
			return vm.total.ingresos - vm.total.gastos
		}

		vm.tipo = function (movimiento) {
			return movimiento.esIngreso && 'Ingreso' || 'Gasto'
		}


	}
	angular.module('cashFlow').controller('CajaCtrl', cajaCtrl);
}());
