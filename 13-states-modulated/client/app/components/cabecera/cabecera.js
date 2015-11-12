(function () {
	angular.module('abCabecera', [])
		.directive('abCabecera', cabecera);

	function cabecera() {
		return {
			transclude: true,
			templateUrl: './app/components/cabecera/cabecera.html'
		};
	};	
		
}());