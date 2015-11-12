(function () {
	angular.module('cashFlow').controller('CajaCtrl', cajaCtrl);

	function cajaCtrl(movimientosFactory, maestrosService) {
		var vm = this;

		vm.titulo = "Controla tu Cash Flow";

		/*
		maestrosService.categoriasPromise
			.success(function (result) {
				vm.maestros = result;
			});
			*/

		// la nueva llamada tiene sintaxis síncrona
		vm.maestros = maestrosService.get();

		vm.nuevoMovimiento = new movimientosFactory.movimientos();
		vm.nuevoMovimiento.esIngreso = 1;
		vm.nuevoMovimiento.fecha = new Date();



		vm.movimientos = [];
		vm.total = {
			ingresos: 0,
			gastos: 0
		};

		/*
		movimientosFactory.gettingMovimientos()
			.success(function (movimientos) {
				vm.movimientos = movimientos;
			});

		movimientosFactory.gettingTotal()
			.success(function (total) {
				vm.total = total;
			});
		vm.guardarMovimiento = function () {
			// No necesitamos hacer una copia
			// porque el array ya no es local
			//var auxCopyMov = angular.copy(vm.nuevoMovimiento);
			vm.nuevoMovimiento.tipo = vm.tipo(vm.nuevoMovimiento);
			movimientosFactory.postingMovimiento(vm.nuevoMovimiento)
				.success(function (postedData) {
					// cuando ha terminado el guardado del movimiento
					// es momento de pedir una actualización de datos
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
		*/

		// Si el recurso devuelve un array, tenemos usar el método query en lugar de get que es para un elemento
		// esto discrimina el tipo de operaciones disponibles para el resultado devuelto
		vm.movimientos = movimientosFactory.movimientos.query();
		vm.total = movimientosFactory.total.get();

		// la sintaxis asíncrona sigue disponible cuando sea necesario
		vm.guardarMovimiento = function () {
			vm.nuevoMovimiento.tipo = vm.tipo(vm.nuevoMovimiento);
			vm.nuevoMovimiento.$save()
				.then(function (result) {
					// cuando ha terminado el guardado del movimiento
					// es momento de pedir una actualización de datos
					vm.movimientos = movimientosFactory.movimientos.query();
					vm.total = movimientosFactory.total.get();
				});
		};

		vm.balance = function () {
			return vm.total.ingresos - vm.total.gastos
		}
		vm.tipo = function (movimiento) {
			return movimiento.esIngreso && 'Ingreso' || 'Gasto'
		}
	}

}());
