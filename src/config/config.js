require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  pokeApiUrl: process.env.POKEAPI_URL || 'https://pokeapi.co/api/v2',
  cacheTtl: parseInt(process.env.CACHE_TTL) || 3600
};
