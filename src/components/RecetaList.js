import React from 'react';
import axios from 'axios';

const RecetaList = ({ recetas }) => {
  // Eliminar receta
  const eliminarReceta = (id) => {
    axios.delete(`/api/recetas/${id}`)
      .then(() => window.location.reload())
      .catch(error => console.error('Error al eliminar receta:', error));
  };

  // Votar por receta
  const votarReceta = (id, tipoVoto) => {
    axios.post(`/api/recetas/${id}/${tipoVoto}`)
      .then(() => window.location.reload())
      .catch(error => console.error('Error al votar por la receta:', error));
  };

  return (
    <div>
      <h2>Recetas Disponibles</h2>
      <ul>
        {recetas.map(receta => (
          <li key={receta.id}>
            <h3>{receta.nombre}</h3>
            <p>{receta.descripcion}</p>
            <p>Ingredientes: {receta.ingredientes.join(', ')}</p>
            <p><strong>Tiempo de Preparación:</strong> {receta.tiempoPreparacion} minutos</p>
            <p><strong>Dificultad:</strong> {receta.dificultad}</p>
            <p><strong>Participante:</strong> {receta.participante}</p>
            <p><strong>Votos:</strong> {receta.votos}</p>

            <button onClick={() => eliminarReceta(receta.id)}>Eliminar</button>

            {/* Votar por receta */}
            <button onClick={() => votarReceta(receta.id, 'positivo')}>👍</button>
            <button onClick={() => votarReceta(receta.id, 'negativo')}>👎</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecetaList;
