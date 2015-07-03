"use strict";
var maxId = 0;
var movimientos = [];
var totales = [];

module.exports.getMovimientos = function (usuario) {
	var movimientosUsuario = movimientos.filter(function (m) {
		return m.usuario = usuario;
	});
	return movimientosUsuario;
}

module.exports.getMovimiento = function (movId, usuario) {
	var movimientoBuscado = movimientos.filter(function (movimiento) {
		return movimiento.id == movId && movimiento.usuario == usuario;
	})[0];
	return movimientoBuscado;
}

module.exports.getTotalUsuario = function (usuario) {
	var totalUsuario = getTotalUsuario(usuario);
	return totalUsuario;
}

module.exports.postMovimiento = function (movimiento) {
	maxId++;
	movimiento.id = maxId;
	movimientos.push(movimiento);
	var totalUsuario = getTotalUsuario(movimiento.usuario);
	if (movimiento.tipo == 'Ingreso')
		totalUsuario.ingresos += movimiento.importe;
	else
		totalUsuario.gastos += movimiento.importe;
	return getMovimientosUsuario(movimiento.usuario);
}

function getMovimientosUsuario(usuario) {
	var movimientosUsuario = movimientos.filter(function (m) {
		return m.usuario = usuario;
	});
	return movimientosUsuario;
}

function getTotalUsuario(usuario) {
	if (usuario === undefined) return {};
	var totalUsuario = totales.filter(function (t) {
		return t.usuario == usuario;
	})[0];
	if (totalUsuario === undefined) {
		totalUsuario = {
			usuario: usuario,
			ingresos: 0,
			gastos: 0
		};
		totales.push(totalUsuario);
	}
	return totalUsuario;
}
