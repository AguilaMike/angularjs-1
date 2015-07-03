(function () {
    var cajaCtrl = function (movimientosFactory) {
        var vm = this;

        vm.titulo = "Controla tu Cash Flow";
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
        vm.total={ingresos:0, gastos:0};
        

        vm.movimientos = movimientosFactory.getMovimientos();
        // Como los datos están en un servidor
        // las factorias me deovlerán promesas
        // Todo funcionará de manera asíncrona
		/*
		movimientosFactory.gettingMovimientos()
            .success(function (movimientos) {
                vm.movimientos = movimientos;
            });
        
		*/
        //Opción pasándole el scope a la factoría para cargarlo allí
        //movimientosFactory.gettingMovimientos2(vm.movimientos);

        vm.total = movimientosFactory.getTotal();
        /*
		movimientosFactory.gettingTotal()
            .success(function (total) {
                vm.total = total;
            });
			*/

        vm.guardarMovimiento = function () {
            // No necesitamos hacer una copia
            // porque el array ya no es local
            var auxCopyMov = angular.copy(vm.nuevoMovimiento);
            
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
                    // puedo limpiar movimiento sin problema
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