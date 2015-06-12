"use strict";
var seguridadData = require('../data/seguridadData.js');

module.exports.seguridad = function (app) {

	app.use('/api/priv/', function (req, res, next) {
		var sessionId = req.get('sessionId');
		var sesion = seguridadData.getSesion(sessionId);
		if (sesion) {
			if (sesion.timeStamp) {
				req.usuario = sesion.email;
				next();
			} else {
				res.status(419).send('Sesión caducada');
			}
		} else {
			res.status(401).send('Credencial inválida');
		}
	});

	// API - REST
	// SECURITY
	app.route('/api/usuarios')
		.post(function (req, res, next) {
			var usuario = req.body;
			var sesion = seguridadData.postUsuario(usuario);
			if (sesion) {
				res.json(sesion);
			} else {
				res.status(409).send('email ' + usuario.email + ' ya registrado');
			}
		});

	// Gestión de sesiones: listado y login
	app.route('/api/sesiones')
		.post(function (req, res, next) {
			var usuario = req.body;
			var sesion = seguridadData.postSesion(usuario);
			if (sesion) {
				res.json(sesion);
			} else {
				res.status(401).send('Credencial inválida');
			}
		});
}
