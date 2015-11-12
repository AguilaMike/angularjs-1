"use strict";
(function () {
    var componentName = "lista";
    angular
        .module(componentName, ['ui.router', 'ngResource', 'abDirectivas', 'abValoracion', 'abFiltros', 'abCabecera' ])
        .config(stateConfig)
        .directive(componentName, directive)
        .service("servicio_"+componentName, service)

    function stateConfig($stateProvider) {
        $stateProvider
            .state(componentName, {
                url: '/' + componentName,
                template: '<' + componentName + '></' + componentName + '>'
            });
    }

    function directive() {
        return {
            templateUrl: 'app/states/' + componentName + '/' + componentName + '.html',
            controller: controller,
            controllerAs: componentName,
            bindToController: true,
            scope: {}
        }
    }

    function controller(servicio_lista) {
        this.movimientos = servicio_lista.Movimientos.query();
    }

    function service($resource) {
        this.Movimientos = $resource("/api/priv/movimientos/");
    }
})();

