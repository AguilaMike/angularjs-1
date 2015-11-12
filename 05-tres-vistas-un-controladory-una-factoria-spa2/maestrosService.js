(function () {

    function maestrosService() {

        var privado ="";

        var srv = this;
        this.categorias = {
            categoriasIngresos: ['Nómina', 'Ventas', 'Intereses Depósitos'],
            categoriasGastos: ['Hipotéca', 'Compras', 'Impuestos']
        };

    }

    // se registran dentro de un módulo con la palabra clave factory
    angular.module('cashFlow').service('maestrosService', maestrosService);
}());
