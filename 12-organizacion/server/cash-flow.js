"use strict";
var app = require('./express.js').configApp();
console.log('ready... app ok');

require('./api/seguridadAPI.js').seguridad(app);
require('./api/maestrosAPI.js').routeMaestros(app);
require('./api/movimientosAPI.js').routeMovimientos(app);
console.log('steady... routes OK');

app.listen(3000);
console.log('go... listening on port: 3000' );
