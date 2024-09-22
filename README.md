🍽️ Frontend de Gestión de Recetas con React

Este proyecto es una aplicación frontend desarrollada con React que interactúa con una API RESTful de gestión de recetas. Permite realizar operaciones de Crear, Leer, Actualizar y Eliminar (CRUD) recetas, así como votar por tus recetas favoritas.

📦 Instalación

Sigue los pasos a continuación para configurar y ejecutar el proyecto localmente.

1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/frontend-recetas.git
cd frontend-recetas
```

2. Instala las dependencias

```bash
npm install
```

3. Configura el proxy para el backend (opcional)
Si estás ejecutando el backend en localhost:8080, configura el proxy para evitar problemas de CORS en el archivo package.json:

```json
"proxy": "http://localhost:8080"
```

4. Ejecuta la aplicación en modo desarrollo

```bash
npm start
```

La aplicación estará disponible en: http://localhost:3000.

⚙️ Funcionalidades

Crear receta: Permite a los usuarios añadir nuevas recetas al sistema.
Obtener todas las recetas: Muestra una lista de todas las recetas disponibles.
Actualizar receta: Los usuarios pueden modificar recetas existentes.
Eliminar receta: Elimina recetas del sistema.
Votar por receta: Los usuarios pueden votar positivamente o negativamente una receta.
👍 Voto positivo suma 1 punto.
👎 Voto negativo resta 2 puntos.

🛠️ Tecnologías Utilizadas

React: Framework para el desarrollo de la interfaz de usuario.
Axios: Cliente HTTP utilizado para interactuar con la API RESTful.
JavaScript (ES6+): Lenguaje de programación.
HTML5 y CSS3: Para la estructura y el estilo de la aplicación.

📂 Estructura del Proyecto

```csharp
frontend-recetas/
│
├── public/                 # Archivos estáticos
├── src/
│   ├── components/         # Componentes React
│   │   ├── RecetaForm.js   # Formulario para crear/actualizar recetas
│   │   └── RecetaList.js   # Listado de recetas y opciones de votación
│   ├── App.js              # Componente principal
│   └── index.js            # Punto de entrada de la app
├── package.json            # Dependencias y scripts
└── ...
```

🚀 Deploy

Para crear una versión optimizada para producción, ejecuta el siguiente comando:

```bash
npm run build
```

Esto generará una carpeta build con los archivos que pueden ser servidos en un servidor web.

🧪 Pruebas

Actualmente, las pruebas unitarias no están implementadas. Puedes agregar pruebas utilizando herramientas como Jest y React Testing Library.

Instalación de Jest (opcional)

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

🌐 API Endpoints

Estos son los endpoints principales que la aplicación frontend consume:

Método	Endpoint	            Descripción
GET	    /api/recetas	        Obtener todas las recetas
GET	    /api/recetas/{id}	    Obtener una receta por ID
POST	/api/recetas	        Crear una nueva receta
PUT	    /api/recetas/{id}	    Actualizar una receta
DELETE	/api/recetas/{id}	    Eliminar una receta
POST	/api/recetas/{id}/voto	Votar por una receta (👍 o 👎)

🖥️ Requisitos del Sistema

Node.js (>=14.x)
npm (>=6.x)

🤝 Contribuir

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, sigue los pasos:

Haz un fork del repositorio.
Crea una nueva rama: git checkout -b mi-nueva-funcionalidad.
Realiza tus cambios y haz un commit: git commit -m 'Añadir mi nueva funcionalidad'.
Sube los cambios: git push origin mi-nueva-funcionalidad.
Abre un pull request.
📝 Licencia

Este proyecto está licenciado bajo la MIT License.