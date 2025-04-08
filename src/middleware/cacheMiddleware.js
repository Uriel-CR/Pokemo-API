const NodeCache = require('node-cache');
const config = require('../config/config');

// Crear una instancia de caché con el tiempo de vida especificado
const cache = new NodeCache({ stdTTL: config.cacheTtl });

// Middleware para verificar y servir desde caché
function cacheMiddleware(req, res, next) {
  const key = req.originalUrl;
  const cachedResponse = cache.get(key);

  if (cachedResponse) {
    // Si existe en caché, se devuelve directamente
    return res.json(cachedResponse);
  }

  // Si no existe en caché, se modifica el método res.json para guardar en caché
  const originalJson = res.json;
  res.json = function(data) {
    cache.set(key, data);
    return originalJson.call(this, data);
  };

  next();
}

module.exports = { cacheMiddleware, cache };
