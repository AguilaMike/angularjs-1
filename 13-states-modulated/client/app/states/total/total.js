"use strict";
(function () {
    var componentName = "total";
    angular
        .module(componentName, ['ui.router', 'ngResource', 'abCabecera'])
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

    function controller(servicio_total) {
        var vm = this;
        vm.total = {
			ingresos: 0,
			gastos: 0
		};
        vm.total = servicio_total.Total.get();

        vm.balance = function () {
			return vm.total.ingresos - vm.total.gastos
		}
    }

    function service($resource) {
        this.Total = $resource("/api/priv/total/");
    }
})();
