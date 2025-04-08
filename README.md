# Proyecto PokéAPI

Este proyecto es una API REST que consume la PokéAPI y agrega funcionalidades como paginación, filtrado por tipos y caché.

## Requisitos previos

- Node.js (v14 o superior)
- npm

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/pokemon-api-project.git
cd pokemon-api-project
```

2. Instalar dependencias:
```bash
npm install
```

3. Crear archivo .env basado en el ejemplo:
```bash
cp .env.example .env
```

4. Modificar el archivo .env con tus variables de entorno.

## Ejecución

Para desarrollo:
```bash
npm run dev
```

Para producción:
```bash
npm start
```

## Endpoints

- `GET /api/pokemon?page=1&limit=10` - Obtener lista de pokémon con paginación
- `GET /api/pokemon/:idOrName` - Obtener detalle de un pokémon por ID o nombre
- `GET /api/types` - Obtener lista de tipos de pokémon
- `GET /api/types/:type` - Obtener pokémon por tipo

## Estructura del proyecto

Explicada en detalle en la documentación técnica.

## Flujo de trabajo Scrum

El proyecto sigue metodología Scrum con las siguientes características:
- Tablero Kanban en Trello/Jira
- Historias de usuario definidas
- Roles asignados por equipo

## CI/CD

Se utiliza GitHub Actions para:
- Validación de código con ESLint
- Ejecución de tests automáticos con Jest

## Licencia

ISC
