const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countriesRouters = require('./country');
const activitiesRouters = require('./activity');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



router.use('/countries', countriesRouters);
router.use('/activities', activitiesRouters);


module.exports = router;
