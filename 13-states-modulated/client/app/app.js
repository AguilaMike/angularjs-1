/** original */
angular.module('cashFlow', ['ngResource', 'ngCookies', 'ui.router', 'registro', 'lista', 'total', 'nuevo', 'abComponentes', 'abMenuNavegacion']);

/** estructura modular jerárquica */
angular.module('cashFlow', ['terceros', 'componentes', 'estados']);
angular.module('terceros', ['ngResource', 'ngCookies', 'ui.router']);
angular.module('componentes', 'abComponentes', 'abMenuNavegacion']);
angular.module('estados', ['registro', 'lista', 'total', 'nuevo']);

/** módulos para cada componente */
