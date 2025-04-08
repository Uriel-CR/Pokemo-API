const axios = require('axios');
const config = require('../config/config');

class PokemonService {
  constructor() {
    this.apiUrl = config.pokeApiUrl;
  }

  // Obtener listado de pokémon con paginación
  async getPokemonList(limit = 10, offset = 0) {
    try {
      const response = await axios.get(`${this.apiUrl}/pokemon`, {
        params: { limit, offset }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching Pokémon list:', error.message);
      throw new Error('Error fetching Pokémon list');
    }
  }

  // Obtener detalle de un pokémon por ID o nombre
  async getPokemonDetail(idOrName) {
    try {
      const response = await axios.get(`${this.apiUrl}/pokemon/${idOrName}`);
      // Seleccionamos solo los datos relevantes
      const pokemon = response.data;
      return {
        id: pokemon.id,
        name: pokemon.name,
        types: pokemon.types.map(t => t.type.name),
        height: pokemon.height,
        weight: pokemon.weight,
        abilities: pokemon.abilities.map(a => a.ability.name),
        sprites: {
          front_default: pokemon.sprites.front_default,
          back_default: pokemon.sprites.back_default
        }
      };
    } catch (error) {
      console.error(`Error fetching Pokémon detail for ${idOrName}:`, error.message);
      throw new Error(`Pokémon with ID or name ${idOrName} not found`);
    }
  }

  // Obtener listado de tipos de pokémon
  async getPokemonTypes() {
    try {
      const response = await axios.get(`${this.apiUrl}/type`);
      return response.data.results;
    } catch (error) {
      console.error('Error fetching Pokémon types:', error.message);
      throw new Error('Error fetching Pokémon types');
    }
  }

  // Obtener pokémon por tipo
  async getPokemonByType(type) {
    try {
      const response = await axios.get(`${this.apiUrl}/type/${type}`);
      // Solo retornamos los nombres y URLs de los pokémon
      return {
        type: response.data.name,
        pokemon: response.data.pokemon.map(p => ({
          name: p.pokemon.name,
          url: p.pokemon.url
        })).slice(0, 10) // Limitamos a 10 pokémon por tipo
      };
    } catch (error) {
      console.error(`Error fetching Pokémon by type ${type}:`, error.message);
      throw new Error(`Type ${type} not found`);
    }
  }
}

module.exports = new PokemonService();
