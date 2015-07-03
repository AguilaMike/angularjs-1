(function () {
	var cajaCtrl = function (maestrosFactory, movimientosFactory) {
		var vm = this;


		vm.titulo = "Controla tu Cash Flow";

		vm.maestros = maestrosFactory.get();

		vm.nuevoMovimiento = new movimientosFactory.movimientos();
		vm.nuevoMovimiento.esIngreso = 1;
		vm.nuevoMovimiento.fecha = new Date();

		vm.movimientos = movimientosFactory.movimientos.query(function () {
			vm.mD3 = [{
					"key": "ingresos",
					values: []
				}
						  , {
					"key": "gastos",
					values: []
					}
						 ];
			var i = 0;
			vm.movimientos.forEach(function (m) {
				if (m.tipo == "Ingreso") {
					vm.mD3[0].values.push([i, m.importe]);
				} else {
					vm.mD3[1].values.push([i, m.importe]);
				}
				i++;
			});

		});

		vm.total = movimientosFactory.total.get(function () {
			vm.tD3 = [
				{
					key: "Ingresos",
					y: vm.total.ingresos
				},
				{
					key: "Gastos",
					y: vm.total.gastos
				}
			];
		});


		vm.guardarMovimiento = function () {
			vm.nuevoMovimiento.tipo = vm.tipo(vm.nuevoMovimiento);
			vm.nuevoMovimiento.$save()
				.then(function (postedData) {
					vm.movimientos = movimientosFactory.movimientos.query();
					vm.total = movimientosFactory.total.get();
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
	angular.module('controlCajaApp').controller('CajaCtrl', cajaCtrl);
}());
