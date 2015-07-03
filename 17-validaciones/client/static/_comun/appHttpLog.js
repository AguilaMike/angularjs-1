(function () {

    function configuradorInterceptores($httpProvider) {
        $httpProvider.interceptors.push(funcionInterceptoraLog);
    }

    function funcionInterceptoraLog($log, $q) {

        var interceptor = {};
        interceptor.request = function (request) {
            $log.info('request:' + request.url);
            return request ;
        };
        interceptor.responseError = function (response) {
            $log.error("excepción: " + response.status + " de :" + response.config.url);
			return $q.reject(response);
        }
		return interceptor;
    }

    angular.module('controlCajaApp').config(configuradorInterceptores);
}());
