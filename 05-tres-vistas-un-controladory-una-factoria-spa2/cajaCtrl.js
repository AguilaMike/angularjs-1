(function () {
    // El controlador ahora tiene una dependencia de la factoría
    // Las dependencias se buscan en nuestro módulo 
    // o en cualquiera de sus dependencias
    var cajaCtrl = function (movimientosFactory,maestrosService) {
        var vm = this;
        
        vm.titulo = "Controla tu Cash Flow";
        vm.maestros = maestrosService.categarias;
        vm.nuevoMovimiento = {
            esIngreso: 1,
            esGasto: 0,
            importe: 0,
            fecha: new Date()
        };
        // La parte de datos que debe compartir la delega sobre la factoría
        vm.movimientos = movimientosFactory.getMovimientos();
        vm.total = movimientosFactory.getTotal();

        vm.guardarMovimiento = function () {
            var auxCopyMov = angular.copy(vm.nuevoMovimiento);
            movimientosFactory.postMovimiento(auxCopyMov);
            vm.nuevoMovimiento.importe=0;
        }
        vm.balance = movimientosFactory.balance();
        vm.tipo = movimientosFactory.tipo;
    }
    angular.module('controlCajaApp').controller('CajaCtrl', cajaCtrl);
}());