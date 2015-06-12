(function () {
    // La factoria ya no almacenrá sus propios datos
    // Mediante el servicio $http hará las llamadas al servidor
    // Es un servicio core y no hay que referenciar ningún módulo extra
    var movimientosFactory =   function ($http)  {
        //        var movimientos = [];
        //        var total = {
        //            ingresos: 0,
        //            gastos: 0
        //        };
        var urlBase = "http://localhost:3000/api/";


        //var factory  =   {};
        //        factory.getMovimientos =   function ()  {
        //            return movimientos;
        //        };

        // se produce un cambio en la nomenclatura
        // al usar el gerundio indicamos un proceso no terminado
        // el controlador que lo consuma debe manejar la promesa
        this.gettingMovimientos =   function ()  {
            // Estamos devolviendo promesas, no objetos
            return $http.get(urlBase + 'priv/movimientos');
        };

        this.gettingTotal =   function ()  {
            return $http.get(urlBase + 'priv/total');
        };
        this.postingMovimiento =   function (movimiento)  {
            return $http.post(urlBase + 'priv/movimientos', movimiento);
        };


        //La poca lógica de negocio se irá al lado del servidor
        //        factory.postMovimiento =   function (movimiento)  {
        //            movimientos.push(movimiento);
        //            total.ingresos += movimiento.esIngreso * movimiento.importe;
        //            total.gastos += movimiento.esGasto * movimiento.importe;
        //        };

        //
        return factory;
    };

    angular.module('controlCajaApp').service('movimientosFactory', movimientosFactory);
}());
