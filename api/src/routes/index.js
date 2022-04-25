const { Router } = require('express');
const Sequelize = require('sequelize');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipes = require('./recipes.js')
const recipe = require('./recipe.js')
const types = require('./types.js')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', async (req, res) => {    
    res.send('to get info from this api please go to <a href="http://localhost:3001/recipes/" >"http://localhost:3001/recipes/"</a> or <a href="http://localhost:/types/" >"http://localhost:/types/"</a>');
});

router.use('/recipes', recipes);
router.use('/recipe', recipe);
router.use('/types', types);

module.exports = router;
