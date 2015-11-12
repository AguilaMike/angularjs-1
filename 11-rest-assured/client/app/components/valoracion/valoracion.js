(function () {
	angular.module('abValoracion', [])
		.directive('abValoracion', valoracion);

	function valoracion() {
		return {
			restrict: 'AE',
			templateUrl: './app/components/valoracion/tpl-valoracion.html',
			scope: {
				valor: '=',
				max: '@',
				soloLectura: '@'
			},
			bindToController: true,
			controllerAs: "valoracion",
			controller: valoracionCtrl
		}
	}

	function valoracionCtrl() {
		var vm = this;

		vm.marcar = function (indice) {
			if (vm.soloLectura && vm.soloLectura === 'true') {
				return;
			}
			vm.valor = indice + 1;
			actualizar();
		};

		actualizar();

		function actualizar() {
			if (!vm.valor) vm.valor = 1;
			vm.estrellas = [];
			for (var i = 0; i < vm.max; i++) {
				var estrella = {
					marcada: (i < vm.valor)
				};
				vm.estrellas.push(estrella);
			}
		};
	}


}());