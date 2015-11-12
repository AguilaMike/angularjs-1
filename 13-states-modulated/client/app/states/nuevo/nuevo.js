"use strict";
(function () {
    var componentName = "nuevo";
    angular
        .module(componentName, ['ui.router', 'ngResource', 'abDirectivas','abValoracion', 'abCabecera'])
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

    function controller(servicio_nuevo, $state) {
        var vm = this;
        vm.maestros = servicio_nuevo.Maestros.get();

		vm.nuevoMovimiento = new servicio_nuevo.Movimientos();
		vm.nuevoMovimiento.esIngreso = 1;
		vm.nuevoMovimiento.fecha = new Date();
        
        vm.guardarMovimiento = function () {
			vm.nuevoMovimiento.tipo = vm.tipo(vm.nuevoMovimiento);
			vm.nuevoMovimiento.$save()
				.then(function (result) {
					$state.go('lista');
				});
		};

		vm.tipo = function (movimiento) {
			return movimiento.esIngreso && 'Ingreso' || 'Gasto'
		}
    }

    function service($resource) {
        this.Maestros = $resource("/api/pub/maestros/");
        this.Movimientos =  $resource("/api/priv/movimientos/");
    }
})();