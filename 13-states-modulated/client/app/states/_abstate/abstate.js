"use strict";
(function () {
    var componentName = "state";
    angular
        .module(componentName, ['ui.router', 'ngResource'])
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

    function controller(servicio_state) {
        var vm = this;
        vm.title = "Mi Estado";
		vm.dato = servicio_state.Recurso;
    }

    function service($resource) {
		var url = '/api/' + componentName + 's/:id'
        this.Recurso = $resource(
            url,
            {
                id: '@_id'
            },
            {
                'update':
                {
                    method: 'PUT'
                }
            });
    }
})();








