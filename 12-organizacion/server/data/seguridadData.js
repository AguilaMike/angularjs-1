"use strict";
var usuarios = [];
var sesiones = [];

module.exports.postUsuario = function (usuario) {
	if (existeUsuario(usuario)) {
		console.log('email ya registrado:' + usuario.email);
		return null;
	} else {
		console.log('registrado:' + usuario.email);
		usuarios.push(usuario);
		return newSession(usuario.email);
	}
}

module.exports.postSesion = function (usuario) {
	if (esUsuarioValido(usuario)) {
		console.log('aceptado:' + usuario.email);
		return newSession(usuario.email);
	} else {
		console.log('Credencial inválida:' + usuario.email);
		return null;
	}
}

module.exports.getSesion = function (sessionId) {
	var sesion = getSesion(sessionId);
		if (sesion) {
			if (esSesionValida(sesion)) {
				sesion.timeStamp = new Date();
				return sesion;
			} else {
				console.log('Sesión caducada:' + JSON.stringify(sesion));
				sesion.timeStamp = null;
				return sesion;
			}
		} else {
			console.log('Credencial inválida:' + sessionId);
			return null;
		}
}


function existeUsuario(usuario) {
	return usuarios.some(function (u) {
		return u.email == usuario.email;
	});
}

function esUsuarioValido(usuario) {
	return usuarios.filter(function (u) {
		return u.email == usuario.email && u.password == usuario.password;
	})[0];
}

function getSesion(sessionId) {
	return sesiones.filter(function (s) {
		return s.sessionId == sessionId;
	})[0]
}

function esSesionValida(sesion) {
	return (new Date() - sesion.timeStamp) < 20 * 60 * 1000;
}

function newSession(email) {
	var sessionId = Math.random() * (88888) + 11111;
	var timeStamp = new Date();
	sesiones.push({
		sessionId: sessionId,
		email: email,
		timeStamp: timeStamp
	});
	return sessionId;
}
