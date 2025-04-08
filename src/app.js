const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const pokemonRoutes = require('./routes/pokemonRoutes');

// Inicializar express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Ruta de estado
app.get('/health', (req, res) => {
  res.json({ status: 'UP', timestamp: new Date() });
});

// Rutas de la API
app.use('/api', pokemonRoutes);

// Manejador de rutas no encontradas
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Manejador de errores - eliminamos el parámetro 'next' que no se usa
app.use((err, req, res) => {
  // Reemplazamos console.error con un comentario o un logger apropiado
  // console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Iniciar servidor
const PORT = config.port;
app.listen(PORT, () => {
  // Podemos mantener este console.log para desarrollo o reemplazarlo
  // console.log(`Server running on port ${PORT}`);
});

module.exports = app; // Para pruebas
