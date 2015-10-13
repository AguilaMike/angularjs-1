'use strict';
var dependencias = ['angular'];

var crear = function (angular) {
	var cajaCtrl = function () {
		var vm = this;
		// Declaración y asignación de valores iniciales
		vm.titulo = "Controla tu Cash Flow";
		vm.total = {
			ingresos: 0,
			gastos: 0
		};
		vm.maestros = {
			categoriasIngresos: ['Nómina', 'Ventas', 'Intereses Depósitos'],
			categoriasGastos: ['Hipotéca', 'Compras', 'Impuestos']
		};
		vm.nuevoMovimiento = {
			esIngreso: 1,
			esGasto: 0,
			importe: 0,
			fecha: new Date()
		};
		// Array en el que guardar los movimientos
		vm.movimientos = [];

		// El scope no son sólo datos, también funciones
		vm.guardarMovimiento = function () {
			if (vm.nuevoMovimiento.esIngreso) {
				vm.total.ingresos += vm.nuevoMovimiento.importe;
			} else {
				vm.total.gastos += vm.nuevoMovimiento.importe;
			}
			// creamos una cipia de los valores del actual formulario
			var auxCopyMov = angular.copy(vm.nuevoMovimiento);
			auxCopyMov.tipo = vm.tipo(auxCopyMov);
			// Se almacena un copia del nuevo movimiento, y se reutiliza la variable para crear otros
			vm.movimientos.push(auxCopyMov);
			// El formulario se limpia y la variable se reutiliza
			vm.nuevoMovimiento.importe = 0;
		}

		// las funiones puede llamarse desde la vista o desde el código
		vm.balance = function () {
			return vm.total.ingresos - vm.total.gastos
		}
		vm.tipo = function (movimiento) {
			return movimiento.esIngreso && 'Ingreso' || 'Gasto'
		}
	};
	return [cajaCtrl];
}

define(dependencias, crear);
