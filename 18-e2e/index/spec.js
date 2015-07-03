// host que vamos a probar
var host = 'http://localhost:3000/'
	// Cada describe es un grupo de pruebas
describe('index elements', function () {

	// cada it es una prueba
	it('should have a title', function () {
		// se pide y espera por una página
		browser.get(host);
		// condición que se prueba
		expect(browser.getTitle()).toEqual('Control de Caja');
	});

	it('should have navbar', function () {
		browser.get(host);
		// se usa un api propio para acceder al DOM
		var navbar = element(by.name('navbar'));
		// comprobaciones de existencia
		expect(navbar.isPresent()).toBe(true);
	});

	it('should have three menu items', function() {
		browser.get(host);
		// comprobaciones de número
		expect(element.all(by.tagName ('li')).count()).toBe(3);
	});
});
