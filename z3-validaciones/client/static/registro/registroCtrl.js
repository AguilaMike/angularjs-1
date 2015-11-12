(function () {
	var registroCtrl = function ($rootScope, $state, $http, $cookieStore, socketFactory) {
		var urlBase = "http://localhost:3000/api/";
		var vm = this;
		vm.apiError = false;
		vm.usuario = {};
		vm.entrar = function () {
			vm.apiError = false;
			$http.post(urlBase + 'sesiones/', vm.usuario)
				.success(function (data) {
					afterLogIn(data);
				})
				.error(function (data, status, headers, config) {
					vm.apiError = true;
				});
		}
		vm.registrar = function () {
			vm.apiError = false;
			$http.post(urlBase + 'usuarios/', vm.usuario)
				.success(function (data) {
					afterLogIn(data);
				})
				.error(function (data, status, headers, config) {
					vm.apiError = true;
				});
		}

		function afterLogIn(data) {
			$rootScope.nombre = vm.usuario.email;
			$cookieStore.put("sessionId", data);
			socketFactory.connect();
			socketFactory.on('wellcome', function (msgIn) {
				console.log("Me he conectado: " + JSON.stringify(msgIn));
				socketFactory.emit("ackClient", "thanks");
			});
			socketFactory.on('ackServer', function (msgIn) {
				console.log("Han recibido mi mensaje: " + JSON.stringify(msgIn));
			});
			$state.go("total");
		}
	}
	angular.module('controlCajaApp').controller('RegistroCtrl', registroCtrl);
}());