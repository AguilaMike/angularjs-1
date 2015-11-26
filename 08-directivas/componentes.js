(function () {
		    
    angular.module('abComponentes', [])
        .directive('abPiePagina', piePagina)
        .directive('abContenido', contenido)
        .directive('abCabecera', cabecera)
        .directive('abMenuNavegacion', menuNavegacion)
        .directive('abFilaMovimiento', filaMovimiento)
        .directive('abTablaMovimientos', tablaMovimientos);
		
    // El uso más simple es crear directivas para usar como código reutilizable
    function piePagina() {
        return {
            template: '<footer class="container"><hr/><p class="text-center">Desarrollado con AngularJS by Google. Por Alberto Basalo - <a href="http://agorabinaria.com">Ágora Binaria SL</a></p></footer>'
        };
    };
    
    // las plantillas pueden tener directivas internas
    function contenido() {
        return {
            template: '<div class="container text-center" style="padding-top:60px;" ui-view></div>'
        };
    };

    // Dos mejoras, sacar el html a un fichero externo (tpl-directiva)
    // Usar Transclude para reutilizar el contenido del usuario y hacer la vista más dinámica
    // En este caso la plantilla debe usar la directiva ng-transclude
    function cabecera() {
        return {
            transclude: true,
            templateUrl: './tpl-cabecera.html'
        };
    };
    
    
    // En este caso la directiva tiene presentación y lógica
    // Asignamos el controlador a la vista desde la plantilla
    function menuNavegacion(){
        return {
            templateUrl: './tpl-menu-navegacion.html',
            controller : "MenuCtrl as menu"
        };
    }

    // En este caso el cambio más siginificatico es el scope
    // Funciona como un API para la directiva y recibe la info vía atributos
    // Por otro lado en este caso hemos tenido que restringir el uso de la directiva
    // Los elementos tr dentro de un table requieren definirse explícitamente
    function filaMovimiento() {
        return {
            //restrict: 'A',
            templateUrl: './tpl-fila-movimiento.html',
            scope: {    
                movimiento: "="
            }
        };
    }

    
    
    function tablaMovimientos(){
        return {
            templateUrl: './tpl-tabla-movimientos.html',
            scope: {
                movimientos: "=movs",
                searchValue :"=searchvalue",
                valorcorte : "@",
                unaFuncion : "&"
            },
            controller : function(){
                this.nombre='tecnocom';
                this.valorcorte = 25;
                this.otrafuncion = function(){

                }
            },
            bindToController: true
        }
    }
    
    
    
    
    
    

}());
