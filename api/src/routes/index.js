const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', async (req, res) => {    
    res.send('to get info from this api please go to <a href="http://localhost:/recipies/" >"http://localhost:/recipies/"</a> or <a href="http://localhost:/types/" >"http://localhost:/types/"</a>');
});



module.exports = router;
