# primera-entrega

Desarrollo de software - Primera entrega

## Descripción

Este proyecto consta de dos partes principales: un backend y un frontend, ambos implementados con Node.js y Express.

## Prerrequisitos

- Node.js (versión 14 o superior)
- npm (viene incluido con Node.js)

## Instalación

1. Clona el repositorio:
   ```
   git clone https://github.com/joaquinsoaje/primera-entrega.git
   cd primera-entrega
   ```

2. Instala las dependencias para el backend:
   ```
   cd backend
   npm install
   cd ..
   ```

3. Instala las dependencias para el frontend:
   ```
   cd frontend
   npm install
   cd ..
   ```

## Cómo ejecutar los proyectos

### Backend

Para ejecutar el backend en modo desarrollo (con recarga automática):
```
cd backend
npm run dev
```

Para ejecutar el backend en modo producción:
```
cd backend
npm start
```

El backend se ejecutará en `http://localhost:3000` por defecto.

### Frontend

Para ejecutar el frontend en modo desarrollo (con recarga automática):
```
cd frontend
PORT=3001 npm run dev
```

Para ejecutar el frontend en modo producción:
```
cd frontend
PORT=3001 npm start
```

El frontend se ejecutará en `http://localhost:3001` por defecto (usando la variable de entorno PORT para evitar conflicto con el backend).

## Endpoints disponibles

### Backend
- `GET /healthcheck`: Verifica el estado del servidor.

### Frontend
- `GET /healthcheck`: Verifica el estado del servidor.

## Notas

- Asegúrate de que los puertos 3000 y 3001 estén disponibles antes de ejecutar los servidores.
- Si deseas cambiar los puertos, puedes modificar la variable de entorno `PORT`.
