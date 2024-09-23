import React, { useState } from 'react';
import axios from 'axios';

const RecetaList = ({ recetas, setRecetas }) => {
  const [loading, setLoading] = useState(false);

  // Eliminar receta
  const eliminarReceta = (id) => {
    setLoading(true);
    axios.delete(`/api/recetas/${id}`)
      .then(() => {
        // Actualizar la lista de recetas localmente sin recargar
        const nuevasRecetas = recetas.filter(receta => receta.id !== id);
        setRecetas(nuevasRecetas);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al eliminar receta:', error);
        setLoading(false);
        alert('Hubo un error al eliminar la receta.');
      });
  };

  // Votar por receta
  const votarReceta = (id, tipoVoto) => {
    setLoading(true);
    axios.post(`/api/recetas/${id}/${tipoVoto}`)
      .then(response => {
        // Actualizar la receta votada sin recargar la página
        const nuevasRecetas = recetas.map(receta =>
          receta.id === id ? { ...receta, votos: response.data.votos } : receta
        );
        setRecetas(nuevasRecetas);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al votar por la receta:', error);
        setLoading(false);
        alert('Hubo un error al votar por la receta.');
      });
  };

  return (
    <div>
      <h2>Recetas Disponibles</h2>
      {loading && <p>Procesando solicitud...</p>}
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

            {/* Botón de eliminar receta */}
            <button onClick={() => eliminarReceta(receta.id)} disabled={loading}>
              {loading ? 'Eliminando...' : 'Eliminar'}
            </button>

            {/* Botones de votar por receta */}
            <button onClick={() => votarReceta(receta.id, 'positivo')} disabled={loading}>
              👍
            </button>
            <button onClick={() => votarReceta(receta.id, 'negativo')} disabled={loading}>
              👎
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecetaList;
