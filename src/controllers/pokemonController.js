const pokemonService = require('../services/pokemonService');

class PokemonController {
  // Obtener lista de pokémon con paginación
  async getPokemonList(req, res) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const offset = (page - 1) * limit;

      const pokemonList = await pokemonService.getPokemonList(limit, offset);
      
      // Añadimos información de paginación
      const response = {
        results: pokemonList.results,
        pagination: {
          count: pokemonList.count,
          pages: Math.ceil(pokemonList.count / limit),
          currentPage: page,
          hasNext: !!pokemonList.next,
          hasPrevious: !!pokemonList.previous
        }
      };

      res.json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Obtener detalle de un pokémon
  async getPokemonDetail(req, res) {
    try {
      const { idOrName } = req.params;
      const pokemonDetail = await pokemonService.getPokemonDetail(idOrName);
      res.json(pokemonDetail);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  // Obtener tipos de pokémon
  async getPokemonTypes(req, res) {
    try {
      const types = await pokemonService.getPokemonTypes();
      res.json(types);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Obtener pokémon por tipo
  async getPokemonByType(req, res) {
    try {
      const { type } = req.params;
      const pokemon = await pokemonService.getPokemonByType(type);
      res.json(pokemon);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = new PokemonController();
