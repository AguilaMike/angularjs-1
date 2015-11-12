(function () {
	var cajaCtrl = function (movimientosFactory, maestrosService) {
		var vm = this;

		vm.titulo = "Controla tu Cash Flow";
		vm.maestros = maestrosService.categorias;
		vm.nuevoMovimiento = {
			esIngreso: 1,
			esGasto: 0,
			importe: 0,
			fecha: new Date()
		};
		vm.movimientos = movimientosFactory.getMovimientos();
		vm.total = movimientosFactory.getTotal();

		vm.guardarMovimiento = function () {
			var auxCopyMov = angular.copy(vm.nuevoMovimiento);
			movimientosFactory.postMovimiento(auxCopyMov);
			vm.nuevoMovimiento.importe = 0;
		}
		vm.balance = movimientosFactory.balance;
		vm.tipo = movimientosFactory.tipo;
	}
	angular.module('cashFlow').controller('CajaCtrl', cajaCtrl);
}());
