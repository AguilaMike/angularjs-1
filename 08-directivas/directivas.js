(function () {
    
	angular.module('abDirectivas', [])
        .directive('abSeleccionado', seleccionado)
		.directive('input', seleccionado)
        .directive('abPlugin', plugin);
		
    // Otro uso de las directivas es extender la funionalidad del DOM sin importar los datos
    // Este es el lugar donde manipular el DOM y jamás en los controladores
    function seleccionado() {
        return {
            link: function (scope, element, attrs) {
                element.bind('mouseenter', function () {
                    element.css('background-color', 'yellow');
                });
                element.bind('mouseleave', function () {
                    element.css('background-color', 'white');
                });
            }
        };
    }

    // Ejemplo no funcional de cómo extender un plugin hecho a medida
    function plugin() {
        return {
            link: function (scope, element, attrs) {

                // Obtención de parámetros vía atributos
                var init = scope.$eval(attrs.ngModel);
                var min = scope.$eval(attrs.abPlugInMin);
                var max = scope.$eval(attrs.abPlugInMax);
                // Configuración básica
                element.pluginInitMethod({
                    value: init,
                    min: min,
                    max: max,
                    tooltip: 'hide'
                });

                // Actualizar la vista cuando cambia el modelo
                scope.$watch(attrs.ngModel, function (valor) {
                    element.pluginMethod('setValue', valor);
                });

                // Actualizar el modelo cuando cambia la vista
                element.on('plugin_event', function (evento) {
                    scope.$apply(function () {
                        scope[attrs.ngModel] = evento.value;
                    });
                });
            }
        }
    }

    
}());
