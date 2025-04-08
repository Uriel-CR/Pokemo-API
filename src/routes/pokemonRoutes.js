const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');
const { cacheMiddleware } = require('../middleware/cacheMiddleware');

// Rutas con caché implementado
router.get('/pokemon', cacheMiddleware, pokemonController.getPokemonList);
router.get('/pokemon/:idOrName', cacheMiddleware, pokemonController.getPokemonDetail);
router.get('/type', cacheMiddleware, pokemonController.getPokemonTypes);
router.get('/type/:type', cacheMiddleware, pokemonController.getPokemonByType);

module.exports = router;
