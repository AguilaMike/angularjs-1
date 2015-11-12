"use strict";
(function () {
    var componentName = "registro";
    angular
        .module(componentName, ['ui.router', 'ngResource','abDirectivas', 'abCabecera'])
        .config(stateConfig)
        .directive(componentName, directive);

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

    function controller($state, $http, $cookies,$rootScope) {
        var urlBase = "http://localhost:3000/api/";
		var vm = this;
		vm.usuario = {};
		vm.registrar = function () {
			$http.post('/api/usuarios/', vm.usuario)
				.success(function (data) {
					$rootScope.nombre = vm.usuario.email;
					$rootScope.mensaje = 'recién creado';
					$cookies.put("sessionId", data);
					$state.go("total");
				});
		}
		vm.entrar = function () {
			$http.post('/api/sesiones/', vm.usuario)
				.success(function (data) {
					$rootScope.nombre = vm.usuario.email;
					$rootScope.mensaje = 'recién entrado';
					$cookies.put("sessionId", data);
					$state.go("total");
				});
		}
    }
})();
