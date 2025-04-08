// Función para manejar errores de manera consistente
const handleError = (res, error) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || 'Error interno del servidor';
  
  return res.status(statusCode).json({
    success: false,
    error: message
  });
};

// Función para dar formato a las respuestas
const formatResponse = (data) => {
  return {
    success: true,
    data
  };
};

module.exports = {
  handleError,
  formatResponse
};
