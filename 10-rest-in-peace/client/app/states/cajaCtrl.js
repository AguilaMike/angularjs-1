(function () {
	var cajaCtrl = function (movimientosFactory, maestrosService) {
		var vm = this;

		vm.titulo = "Controla tu Cash Flow";

		//vm.maestros = maestrosService.categorias;

		// ahora invocamos a un servicio que nos devuelve una promesa
		maestrosService.categoriasPromise
			.success(function (result) {
				// en un futuro llegarán los datos de forma asíncrona
				vm.maestros = result;
			});


		vm.nuevoMovimiento = {
			esIngreso: 1,
			esGasto: 0,
			importe: 0,
			fecha: new Date()
		};

		/*
		vm.movimientos = movimientosFactory.getMovimientos();
		vm.total = movimientosFactory.getTotal();

		
		*/

		vm.movimientos = [];
		vm.total = {
			ingresos: 0,
			gastos: 0
		};
		// Como los datos están en un servidor
		// las factorias me devolerán promesas
		// Todo funcionará de manera asíncrona

		//vm.movimientos = movimientosFactory.getMovimientos();
		movimientosFactory.gettingMovimientos()
			.success(function (movimientos) {
				vm.movimientos = movimientos;
			});

		//vm.total = movimientosFactory.getTotal();
		movimientosFactory.gettingTotal()
			.success(function (total) {
				vm.total = total;
			});


		/*
		vm.guardarMovimiento = function () {
					var auxCopyMov = angular.copy(vm.nuevoMovimiento);
					movimientosFactory.postMovimiento(auxCopyMov);
					vm.nuevoMovimiento.importe = 0;
				}
		*/
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
		//vm.balance = movimientosFactory.balance;
		vm.balance = function () {
			return vm.total.ingresos - vm.total.gastos
		}
		//vm.tipo = movimientosFactory.tipo;
		vm.tipo = function (movimiento) {
			return movimiento.esIngreso && 'Ingreso' || 'Gasto'
		}


	}
	angular.module('cashFlow').controller('CajaCtrl', cajaCtrl);
}());
