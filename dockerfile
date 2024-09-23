# Usa una imagen de Node.js como base
FROM node:16-alpine AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Compila la aplicación
RUN --mount=type=cache,id=s/05f37dcb-ca3d-4c70-9588-1bc184739187-/root/npm,target=/root/.npm npm install

# Usa una imagen ligera de nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos de la compilación a nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Comando por defecto para ejecutar nginx
CMD ["nginx", "-g", "daemon off;"]
