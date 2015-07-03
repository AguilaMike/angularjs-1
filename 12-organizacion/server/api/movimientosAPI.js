"use strict";
var movimientosData = require('../data/movimientosData.js');

module.exports.routeMovimientos = function (app) {

	app.route('/api/priv/movimientos')
		.get(function (req, res, next) {
			res.json(movimientosData.getMovimientos(req.usuario));
		})
		.post(function (req, res, next) {
			var movimiento = req.body;
			movimiento.usuario = req.usuario;
			movimientosData.postMovimiento(movimiento);
			res.status(200).send();
		});

	app.get('/api/priv/movimientos/:id', function (req, res, next) {
		res.json(movimientosData.getMovimiento(req.params.id, req.usuario));
	});

	app.get('/api/priv/total', function (req, res, next) {
		res.json(movimientosData.getTotalUsuario(req.usuario));
	});


}
