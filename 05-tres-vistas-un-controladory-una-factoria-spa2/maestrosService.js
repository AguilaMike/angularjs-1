(function () {

    function maestrosService() {
        
        var privado ="";
        
        
        this.categarias = {
            categoriasIngresos: ['Nómina', 'Ventas', 'Intereses Depósitos'],
            categoriasGastos: ['Hipotéca', 'Compras', 'Impuestos']
        };

    }


    // se registran dentro de un módulo con la palabra clave factory
    angular.module('cashFlow').service('maestrosService', maestrosService);
}());