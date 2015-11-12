(function () {
	angular.module('abMenuNavegacion').controller('MenuCtrl', menuCtrl);

	function menuCtrl($state) {
		this.isActive = function (estado) {
			return $state.is(estado);
		}
	}

}());
