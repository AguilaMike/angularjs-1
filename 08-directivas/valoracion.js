(function () {
	angular.module('abValoracion', [])
		.directive('abValoracion', valoracion);

	function valoracion() {
		return {
			restrict: 'AE',
			templateUrl: './tpl-valoracion.html',
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
		/** responde al click en una estrella */
		vm.marcar = function (indice) {
			if (vm.soloLectura && vm.soloLectura === 'true') {
				return;
			}
			vm.valor = indice + 1;
			actualizar();
		};

		/** para empezar iniciamos los datos según lo recibido en el scope */
		actualizar();

		/** actualiza los datos para repintar la vista */
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