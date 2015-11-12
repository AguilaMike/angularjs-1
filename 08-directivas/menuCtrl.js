(function () {
	angular.module('cashFlow').controller('MenuCtrl', menuCtrl);

	function menuCtrl($state) {
		this.isActive = function (estado) {
			return $state.is(estado);
		}
	}

}());
