angular
	.module('climAngular', []);

angular
	.module('climAngular')
	.controller("ClimAngularCtrl", ClimAngularCtrl);

// La función controladora se crea con nombre de maner independiente
// En lugar de programarla inline dentro del constructor del controlador
function ClimAngularCtrl($http) {
	// Esta función necesita una dependencia y la declara como un parametro
	// AngularJS se encarga de instaciar y proveer los parámetros necesarios
	// En este caso es $http que es un servicio includo en el paquete básico


	var baseurl = "http://api.openweathermap.org/data/2.5/forecast/daily?q=";
	var jsonp = "&units=metric&APPID=7d596391de2ab0c37b781868265d681e&callback=JSON_CALLBACK";

	var vm = this;
	// Podemos tener datos precargados
	vm.city_name = "Madrid";
	vm.country_code = "ES"

	// El array de valores que se enlaza al desplegable generado con ng-options
	vm.countries = [
		{
			name: 'Argentina',
			code: 'AR'
        },
		{
			name: 'Brasil',
			code: 'BR'
        },
		{
			name: 'España',
			code: 'ES'
        },
		{
			name: 'Portugal',
			code: 'PT'
        }];

	// Las funciones pueden, y deben, definirse con su nombre, y publicarlas a través del viewmodel
	vm.getForecast = getForecast;

	function getForecast() {
		var url = baseurl + vm.city_name + ',' + vm.country_code + jsonp

		// Uso del servicio de $http para hacer una llamada, en este caso JSONP
		// $http devuleve promesas y debemos proveerle de callbacks para cuando se resuelvan
		$http
			.jsonp(url)
			.success(fillForecast);
		// funcion callback que se ejcuta cuando responda openweathermap
		function fillForecast(forecastData) {
			// asignación al viewmodel de los datos recibidos
			vm.forecast = forecastData
		}
	};

}
